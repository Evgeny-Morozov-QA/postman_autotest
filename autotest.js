// Autotest for https://swapi.dev/api/people/10


pm.test("Рост Оби-Ван Кеноби", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.height).to.eql("182");
});
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});
pm.test("Body matches string", function () {
    pm.expect(pm.response.text()).to.include("");
});

// Autotest for https://swapi.dev/api/planets/7

pm.test("Content-Type is present", function () {
    pm.response.to.have.header("Vary");
});
pm.test("Климат", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.climate).to.eql("temperate");""
});
pm.test("Body matches string", function () {
    pm.expect(pm.response.text()).to.include("gravity");
});


// Autotest for https://swapi.dev/api/starships/5


pm.test("Response time is less than 100ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(100);
});
pm.test("Body matches string", function () {
    pm.expect(pm.response.text()).to.include("crew");
});
pm.test("Status code name has string", function () {
    pm.response.to.have.status("OK");
});
