import { Lesson10Page } from './app.po';

describe('lesson10 App', () => {
  let page: Lesson10Page;

  beforeEach(() => {
    page = new Lesson10Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
