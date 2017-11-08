import { CotelcoPage } from './app.po';

describe('cotelco App', () => {
  let page: CotelcoPage;

  beforeEach(() => {
    page = new CotelcoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
