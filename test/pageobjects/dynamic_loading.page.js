const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class DynamicLoadingPage extends Page {
    /**
     * define selectors using getter methods
     */
     get startButton() {
        return $('#start button'); //uses Element with certain text selector
   }
  /**
   * overwrite specific options to adapt it to page object
   */
   async Click(path,element) {
     await this.open(path);

      await $(element).click();
      //await $(element).waitForDisplayed({ timeout: 5000, reverse : true });
  }

  async exist(url,element,text) {
        it(text, async () => {
        await this.open(url);
        await browser.pause(5000)
        await expect($(element)).toBeExisting();
        await browser.saveScreenshot('./screenshot/screenshot.png');
        
    });
  }
  get htest(){
      return $('#finish h4');
  }
  open(path) {
      return super.open(path);
  }
}

module.exports = new DynamicLoadingPage();