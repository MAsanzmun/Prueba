import { LernDPage } from './app.po';

describe('lern-d App', function() {
  let page: LernDPage;

  beforeEach(() => {
    page = new LernDPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
