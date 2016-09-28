import { CaseStudyMySyncHubStepsPage } from './app.po';

describe('case-study-my-sync-hub-steps App', function() {
  let page: CaseStudyMySyncHubStepsPage;

  beforeEach(() => {
    page = new CaseStudyMySyncHubStepsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
