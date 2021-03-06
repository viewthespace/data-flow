class RetailViewCtrl {
  $onInit() {
    this.spaces = this._buildSpaces();
    this.selectedSpace = null;
  }

  setSelectedSpace(space) {
    this.selectedSpace = space;
  }

  removeSelectedSpace() {
    this.selectedSpace = null;
  }

  _buildSpaces() {
    return [
      {
        tenant: "Starbucks",
        rent: "$1,000",
        expirationDate: "1/1/2020",
        occupancyCost: "10%",
      },
      {
        tenant: "Target",
        rent: "$2,000",
        expirationDate: "2/2/2025",
        occupancyCost: "30%",
      },
      {
        tenant: "Best Buy",
        rent: "$1,800",
        expirationDate: "3/14/2027",
        occupancyCost: "5%",
      },
      {
        tenant: "Marshalls",
        rent: "$1,100",
        expirationDate: "2/10/2018",
        occupancyCost: "15%",
      },
      {
        tenant: "Chipotle",
        rent: "$1,300",
        expirationDate: "9/16/2029",
        occupancyCost: "10%",
      },
      {
        tenant: "Shoprite",
        rent: "$2,300",
        expirationDate: "8/15/2022",
        occupancyCost: "4%",
      },
      {
        tenant: "Home Depot",
        rent: "$1,900",
        expirationDate: "4/12/2020",
        occupancyCost: "2%",
      },
    ];
  }
}

angular.module("dataFlow").component("retailView", {
  templateUrl: "retailView.html",
  controller: RetailViewCtrl
});
