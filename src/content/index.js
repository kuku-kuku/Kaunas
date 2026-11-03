// Content entry point. Everything user-facing that isn't layout lives under ./<lang>/.
// Only Lithuanian exists today. To add English later: create ./en/ with the same exports
// and switch on the active language here (e.g. from the URL prefix).

export * from './lt/site';
export * from './lt/navigation';
export * from './lt/partners';
export * from './lt/stats';
export * from './lt/coaches';
export * from './lt/groups';
export * from './lt/news';
export * from './lt/home';
export * from './lt/programs';
export * from './lt/trial';
