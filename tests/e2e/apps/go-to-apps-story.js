/**
 * Created by rodrigopavezi on 10/21/14.
 */
describe("Go to Apps", function() {

    beforeEach(function() {
        browser.get('index.html');
    });

    it("should show apps when /apps is accessed", function() {
        browser.get('#/apps');
        expect(browser.getLocationAbsUrl()).toMatch("/apps");
    });

    it("should show apps when clicked on the apps button on the common header", function() {
        element(by.cssContainingText('.ng-binding', 'Apps')).click();
        expect(browser.getLocationAbsUrl()).toMatch("/apps");
    });
});