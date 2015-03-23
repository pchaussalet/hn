var TimeAgoConverter = require("lib/time-ago-converter").TimeAgoConverter;
var TestPageLoader = require("montage-testing/testpageloader").TestPageLoader;

describe("time-ago/time-ago-spec", function () {
    it("should convert", function() {
        var converter = new TimeAgoConverter();
        var ago = converter.convert(Date.now()/1000 - 20);
        expect(ago).toBe("20 seconds");
    });
    it("should convert to now", function() {
        var converter = new TimeAgoConverter();
        var ago = converter.convert(Date.now()/1000 - 0);
        expect(ago).toBe("now");
    });
    it("should convert to second", function() {
        var converter = new TimeAgoConverter();
        var ago = converter.convert(Date.now()/1000 - 1);
        expect(ago).toBe("1 second");
    });
    it("should convert to seconds", function() {
        var converter = new TimeAgoConverter();
        var ago = converter.convert(Date.now()/1000 - 5);
        expect(ago).toBe("5 seconds");
    });
    it("should convert to minutes", function() {
        var converter = new TimeAgoConverter();
        var ago = converter.convert(Date.now()/1000 - 15*60);
        expect(ago).toBe("15 minutes");
    });
    it("should convert to hours", function() {
        var converter = new TimeAgoConverter();
        var ago = converter.convert(Date.now()/1000 - 15*60*60);
        expect(ago).toBe("15 hours");
    });
    it("should convert to days", function() {
        var converter = new TimeAgoConverter();
        var ago = converter.convert(Date.now()/1000 - 15*60*60*24);
        expect(ago).toBe("15 days");
    });
    it("should convert to months", function() {
        var converter = new TimeAgoConverter();
        var ago = converter.convert(Date.now()/1000 - 6*60*60*24*30);
        expect(ago).toBe("6 months");
    });
    it("should convert to years", function() {
        var converter = new TimeAgoConverter();
        var ago = converter.convert(Date.now()/1000 - 15*60*60*24*30*12);
        expect(ago).toBe("15 years");
    });
});
