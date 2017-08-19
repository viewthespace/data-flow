class SitePlanCtrl {
  selectSpace(index) {
    this.onSpaceSelected({ space: this.spaces[index] });
  }

  spaceStyles(index) {
    let styles = [this.spaceColor(index)];
    let space = this.spaces[index];
    if (this.selectedSpace && space.tenant === this.selectedSpace.tenant) {
      styles.push("active-space");
    }

    return styles;
  }

  spaceColor(index) {
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
