import { expect } from 'chai';
import testUtils from './utils';

describe('application launch', () => {
  beforeEach(testUtils.beforeEach);
  afterEach(testUtils.afterEach);

  it('shows welcome text on screen after launch', function () {
    return this.app.client.getText('#greet').then((text) => {
      expect(text).to.equal('Welcome to Boilerplate!');
    });
  });
});
