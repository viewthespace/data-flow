class SpaceDetailCtrl {
}

angular.module("dataFlow").component("spaceDetail", {
  bindings: {
    space: "<",
    onClose: "&"
  },
  controller: SpaceDetailCtrl,
  templateUrl: "spaceDetail.html"
});
