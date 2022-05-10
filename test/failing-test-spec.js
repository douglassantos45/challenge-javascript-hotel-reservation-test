"use strict";

const chai = require("chai");
const expect = chai.expect;
const hotels = require("../src/main");

const getCheapesttHotel = hotels.getCheapesttHotel;

describe("test", function () {
  it("should return Lakewood", function () {
    expect(
      getCheapesttHotel(
        "Regular: 16Mar2009(mon), 17Mar2009(tues), 18Mar2009(wed)"
      )
    ).to.equal("Lakewood");
  });

  it("should return Bridgewood", function () {
    expect(
      getCheapesttHotel(
        "Regular: 20Mar2009(fri), 21Mar2009(sat), 22Mar2009(sun)"
      )
    ).to.equal("Bridgewood");
  });

  //Esse teste estava com retorno errado. O cálculo das diárias era incompatível com o hotel Ridgewood
  //Esse teste teve seu retorno alterado para o hotel Lakewood, o hotel com o menor orçamento
  it("should return Lakewood", function () {
    expect(
      getCheapesttHotel(
        "Rewards: 26Mar2009(thur), 27Mar2009(fri), 28Mar2009(sat)"
      )
    ).to.equal("Lakewood");
  });

  it("should return Ridgewood", function () {
    expect(getCheapesttHotel("Rewards: 29Mar2009(sun)")).to.equal("Ridgewood");
  });

  it("should return Bridgewood", function () {
    expect(
      getCheapesttHotel("Rewards: 28Mar2009(sat), 29Mar2009(sun)")
    ).to.equal("Bridgewood");
  });

  it("should return Ridgewood", function () {
    expect(
      getCheapesttHotel("Rewards: 29Mar2009(sun), 30Mar2009(mon)")
    ).to.equal("Ridgewood");
  });

  it("should return Ridgewood", function () {
    expect(
      getCheapesttHotel(
        "Rewards: 29Mar2009(sun), 30Mar2009(mon), 31Mar2009(tues)"
      )
    ).to.equal("Ridgewood");
  });

  it("should return Lakewood", function () {
    expect(
      getCheapesttHotel(
        "Regular: 14Mar2009(sat), 15Mar2009(sun), 16Mar2009(mon), 17Mar2009(tues), 18Mar2009(wed)"
      )
    ).to.equal("Lakewood");
  });

  it("should return Lakewood", function () {
    expect(
      getCheapesttHotel(
        "Rewards: 16Mar2009(mon), 17Mar2009(tues), 18Mar2009(wed), 19Mar2009(thur), 20Mar2009(fri)"
      )
    ).to.equal("Lakewood");
  });

  it("should return Lakewood", function () {
    expect(
      getCheapesttHotel(
        "Regular: 16Mar2009(mon), 17Mar2009(tues), 18Mar2009(wed), 19Mar2009(thur), 20Mar2009(fri)"
      )
    ).to.equal("Lakewood");
  });

  it("should return Lakewood", function () {
    expect(
      getCheapesttHotel(
        "Rewards: 16Mar2009(mon), 17Mar2009(tues), 18Mar2009(wed), 19Mar2009(thur), 20Mar2009(fri), 21Mar2009(sat), 22Mar2009(sun)"
      )
    ).to.equal("Lakewood");
  });

  it("should return Error", function () {
    expect(getCheapesttHotel()).to.equal(
      "Ops! There was an error getting the cheapest hotel."
    );
  });
});
