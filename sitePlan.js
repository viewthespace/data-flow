class SitePlanCtrl {
  selectSpace(index) {
    this.onSpaceSelected({ space: this.spaces[index] });
  }
}

angular.module("dataFlow").component("sitePlan", {
  bindings: {
    spaces: "<",
    onSpaceSelected: "&"
  },
  controller: SitePlanCtrl,
  templateUrl: "sitePlan.html"
});
