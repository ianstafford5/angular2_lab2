import { AngularLab2Page } from './app.po';

describe('angular-lab2 App', function() {
  let page: AngularLab2Page;

  beforeEach(() => {
    page = new AngularLab2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
