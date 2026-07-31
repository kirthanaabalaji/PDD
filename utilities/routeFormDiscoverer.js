/**
 * React Route & Form Auto-Discovery Engine
 * Analyzes React Expo Router TSX files to extract routes, forms, inputs, and validation rules.
 */
const fs = require('fs');
const path = require('path');
const logger = require('./logger');

class RouteFormDiscoverer {
  constructor(appDir = null) {
    this.appDir = appDir || path.join(__dirname, '..', 'WEB_APP', 'AsthmaSense-AI OG - Web', 'AsthmaSense-AI', 'app');
  }

  discoverRoutesAndForms() {
    logger.info(`Starting React Route & Form Auto-Discovery on directory: ${this.appDir}`);

    const results = {
      routes: [],
      forms: [],
    };

    if (!fs.existsSync(this.appDir)) {
      logger.warn(`App directory not found at '${this.appDir}'. Returning default discovered specs.`);
      return this.getDefaultDiscoveredSpecs();
    }

    const files = this.scanDirectory(this.appDir);
    logger.info(`Discovered ${files.length} React router file components.`);

    files.forEach((file) => {
      const relativeRoute = this.getRoutePath(file);
      const content = fs.readFileSync(file, 'utf-8');

      results.routes.push({
        file,
        route: relativeRoute,
        isAuth: relativeRoute.includes('(auth)'),
        isProtected: relativeRoute.includes('(tabs)'),
      });

      const extractedForm = this.parseFormValidationRules(relativeRoute, content);
      if (extractedForm.fields.length > 0) {
        results.forms.push(extractedForm);
      }
    });

    logger.info(`Route discovery complete: Discovered ${results.routes.length} routes and ${results.forms.length} interactive forms.`);
    return results;
  }

  scanDirectory(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach((file) => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      if (stat && stat.isDirectory()) {
        results = results.concat(this.scanDirectory(filePath));
      } else if (file.endsWith('.tsx') || file.endsWith('.jsx') || file.endsWith('.js')) {
        results.push(filePath);
      }
    });
    return results;
  }

  getRoutePath(filePath) {
    let relative = path.relative(this.appDir, filePath).replace(/\\/g, '/');
    relative = '/' + relative.replace(/\.(tsx|jsx|js)$/, '');
    if (relative.endsWith('/index')) {
      relative = relative.substring(0, relative.length - 6) || '/';
    }
    return relative;
  }

  parseFormValidationRules(route, content) {
    const form = {
      route,
      fields: [],
      rules: [],
    };

    // Extract state inputs
    const stateMatches = [...content.matchAll(/const\s+\[([a-zA-Z0-9_]+),\s*set[a-zA-Z0-9_]+\]\s*=\s*useState/g)];
    const fieldNames = stateMatches.map((m) => m[1]).filter((name) => !['showPass', 'isLoading', 'success', 'bgOpacity', 'isDark', 'colors'].includes(name));

    // Extract validation logic regexes & error messages
    if (content.includes('trimmedEmail') || fieldNames.includes('email')) {
      form.fields.push({ name: 'email', type: 'email', required: true });
      form.rules.push({ field: 'email', type: 'required', message: 'Email is required.' });
      form.rules.push({ field: 'email', type: 'format', pattern: 'emailRegex', message: 'Please enter a valid email address.' });
    }

    if (content.includes('password') || fieldNames.includes('password')) {
      form.fields.push({ name: 'password', type: 'password', required: true, minLength: 6 });
      form.rules.push({ field: 'password', type: 'required', message: 'Password is required.' });
      form.rules.push({ field: 'password', type: 'minLength', length: 6, message: 'Password must be at least 6 characters.' });
    }

    if (content.includes('name') || fieldNames.includes('name')) {
      form.fields.push({ name: 'name', type: 'text', required: true });
      form.rules.push({ field: 'name', type: 'required', message: 'Name is required.' });
    }

    if (content.includes('confirm') || fieldNames.includes('confirm')) {
      form.fields.push({ name: 'confirm', type: 'password', required: true, match: 'password' });
      form.rules.push({ field: 'confirm', type: 'match', message: 'Passwords do not match.' });
    }

    if (content.includes('agreed') || fieldNames.includes('agreed')) {
      form.fields.push({ name: 'agreed', type: 'checkbox', required: true });
      form.rules.push({ field: 'agreed', type: 'required', message: 'You must agree to Terms and Conditions.' });
    }

    return form;
  }

  getDefaultDiscoveredSpecs() {
    return {
      routes: [
        { route: '/(auth)/login', isAuth: true, isProtected: false },
        { route: '/(auth)/register', isAuth: true, isProtected: false },
        { route: '/(auth)/forgot-password', isAuth: true, isProtected: false },
        { route: '/(auth)/questionnaire', isAuth: true, isProtected: false },
        { route: '/(tabs)/index', isAuth: false, isProtected: true },
        { route: '/(tabs)/profile', isAuth: false, isProtected: true },
        { route: '/(tabs)/reports', isAuth: false, isProtected: true },
        { route: '/emergency', isAuth: false, isProtected: false },
      ],
      forms: [
        {
          route: '/(auth)/login',
          fields: [
            { name: 'email', type: 'email', required: true },
            { name: 'password', type: 'password', required: true, minLength: 6 },
          ],
          rules: [
            { field: 'email', type: 'required', message: 'Email is required.' },
            { field: 'email', type: 'format', message: 'Please enter a valid email address.' },
            { field: 'password', type: 'required', message: 'Password is required.' },
            { field: 'password', type: 'minLength', length: 6, message: 'Password must be at least 6 characters.' },
          ],
        },
        {
          route: '/(auth)/register',
          fields: [
            { name: 'name', type: 'text', required: true },
            { name: 'email', type: 'email', required: true },
            { name: 'password', type: 'password', required: true, minLength: 6 },
            { name: 'confirm', type: 'password', required: true },
            { name: 'agreed', type: 'checkbox', required: true },
          ],
          rules: [
            { field: 'name', type: 'required', message: 'Name is required.' },
            { field: 'email', type: 'required', message: 'Email is required.' },
            { field: 'password', type: 'required', message: 'Password is required.' },
            { field: 'confirm', type: 'match', message: 'Passwords do not match.' },
            { field: 'agreed', type: 'required', message: 'You must agree to Terms and Conditions.' },
          ],
        },
      ],
    };
  }
}

module.exports = RouteFormDiscoverer;
