var App = angular.module('EditInPlace', []);
App.directive("clickToEdit", function() {
	var editorTemplate = '<div class="click-to-edit">' +
							'<div ng-hide="view.editorEnabled" ng-click="enableEditor()" class="click-to-edit-value">' +
								'{{value}}' +
							'</div>' +
							'<div ng-show="view.editorEnabled">' +
								'<input class="click-to-edit-input" ng-model="view.editableValue">' +
								'<a ng-click="save()" class="click-to-edit-btn save">Save</a>' +
								'<a ng-click="disableEditor()" class="click-to-edit-btn close">Cancel</a>.' +
							'</div>' +
						'</div>';

	return {
		restrict: "A",
		replace: true,
		template: editorTemplate,
		scope: {
			value: "=clickToEdit",
		},
		controller: function($scope, $element) {
			$scope.view = {
				editableValue: $scope.value,
				editorEnabled: false
			};

			$scope.enableEditor = function() {
				$scope.view.editorEnabled = true;
				$scope.view.editableValue = $scope.value;
			};

			$scope.disableEditor = function() {
				$scope.view.editorEnabled = false;
			};

			$scope.save = function() {
				$scope.value = $scope.view.editableValue;
				$scope.disableEditor();
			};
		}
	};
});