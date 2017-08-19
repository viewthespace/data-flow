class TenantListCtrl {
  $onInit() {
    this.tenants = this.spaces.map(s => s.tenant).sort();
  }

  selectTenant(index) {
    this.onTenantSelected({ space: this.spaces[index] });
  }
}

angular.module("dataFlow").component("tenantList", {
  bindings: {
    spaces: "<",
    onTenantSelected: "&"
  },
  controller: TenantListCtrl,
  templateUrl: "tenantList.html"
});
