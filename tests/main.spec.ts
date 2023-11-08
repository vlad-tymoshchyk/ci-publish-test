import { Selector } from 'testcafe';
import { takeSnapshot } from 'testcafe-blink-diff';

fixture`Main fixture`;

test.page('http://localhost:3000')('main', async (t) => {
  await t.expect(Selector('.main').visible).ok();

  await takeSnapshot(t);
});
