class SitePlanCtrl {
  selectSpace(index) {
    this.onSpaceSelected({ space: this.spaces[index] });
  }

  spaceColor(index) {
    let space = this.spaces[index];
    return [
      "btn-primary", "btn-danger", "btn-success",
      "btn-warning", "btn-secondary", "btn-info"
    ][index];
  }
}

angular.module("dataFlow").component("sitePlan", {
  bindings: {
    spaces: "<",
    selectedSpace: "<",
    onSpaceSelected: "&"
  },
  controller: SitePlanCtrl,
  templateUrl: "sitePlan.html"
});
