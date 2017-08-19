class TenantListCtrl {
  $onInit() {
    this.tenants = this.spaces.map(s => s.tenant).sort();
  }

  selectTenant(index) {
    let selectedSpace = this.spaces.filter(
      s => s.tenant === this.tenants[index]
    )[0];
    this.onTenantSelected({ space: selectedSpace });
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
