angular
	
	.module('inlineSvg', [])

	.directive('inlineSvg', function() {
		
		return {
			
			restrict: 'A',
			
			scope: {
				inlineSvg: '@'
			},
			
			link: function(scope, element, attrs) {
			 
				$.get(scope.inlineSvg, function(svgDocument) {
					$(svgDocument)
						.find('svg')
						.appendTo(element);
				});
				
			}
			
		};
		
	});
