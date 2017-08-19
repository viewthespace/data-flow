class SitePlanCtrl {
  selectSpace(index) {
    this.onSpaceSelected({ space: this.spaces[index] });
  }

  spaceColorStyle(index) {
    return [
      "btn-primary", "btn-danger", "btn-success",
      "btn-warning", "btn-secondary", "btn-info"
    ][index];
  }

  isSelectedSpace(index) {
    if (this.selectedSpace) {
      return this.selectedSpace.tenant === this.spaces[index].tenant;
    }
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
