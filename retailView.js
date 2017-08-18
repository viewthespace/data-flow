class RetailViewCtrl {
  $onInit() {
    this.spaces = this._buildSpaces();
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
        expirationDate: "1/1/2020"
      },
      {
        tenant: "Target",
        rent: "$2,000",
        expirationDate: "2/2/2025"
      }
    ];
  }
}

angular.module("dataFlow").component("retailView", {
  templateUrl: "retailView.html",
  controller: RetailViewCtrl
});
