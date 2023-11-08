fixture`Main fixture`;

test.page('http://localhost:3000')('main', async (t) => {
  await t.takeScreenshot();
});
