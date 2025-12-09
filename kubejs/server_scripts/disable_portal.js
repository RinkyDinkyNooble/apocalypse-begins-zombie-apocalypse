ServerEvents.loaded(event => {
  event.server.runCommandSilent("disableportal nether true");
  event.server.runCommandSilent("disableportal end true");
});