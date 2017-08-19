class TenantListCtrl {
  $onInit() {
    this.tenants = this.spaces.map(s => s.tenant).sort();
  }

  selectTenant(index) {
    this.onTenantSelected({ space: this.spaces[index] });
  }

  isSpaceActive(index) {
    if (this.selectedSpace === null) {
      return false;
    }

    return this.tenants[index] === this.selectedSpace.tenant;
  }
}

angular.module("dataFlow").component("tenantList", {
  bindings: {
    spaces: "<",
    selectedSpace: "<",
    onTenantSelected: "&"
  },
  controller: TenantListCtrl,
  templateUrl: "tenantList.html"
});
