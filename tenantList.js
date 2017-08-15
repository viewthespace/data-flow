class TenantListCtrl {

}

angular.module("dataFlow").component("tenantList", {
  bindings: {
    tenants: "<"
  },
  controller: TenantListCtrl,
  templateUrl: "tenantList.html"
});
