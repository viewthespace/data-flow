angular.module("dataFlow").component("spaceDetail", {
  bindings: {
    selectedSpace: "<",
    onClose: "&"
  },
  templateUrl: "spaceDetail.html"
});
