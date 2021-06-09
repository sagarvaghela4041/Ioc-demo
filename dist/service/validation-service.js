"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationService = void 0;
var ValidationService = /** @class */ (function () {
    function ValidationService() {
    }
    ValidationService.prototype.createResponse = function (validationErrors) {
        var response = [];
        for (var _i = 0, validationErrors_1 = validationErrors; _i < validationErrors_1.length; _i++) {
            var validationError = validationErrors_1[_i];
            var error = {
                property: validationError.property,
                constraints: validationError.constraints
            };
            response.push(error);
            if (validationError.children) {
                var errorFromChild = this.createChildObjectErrorResponse(validationError.children);
                if (errorFromChild === null || errorFromChild === void 0 ? void 0 : errorFromChild.length) {
                    response.push(errorFromChild);
                }
            }
        }
        return response;
    };
    ValidationService.prototype.createChildObjectErrorResponse = function (validationError) {
        var childConstraints = [];
        for (var _i = 0, validationError_1 = validationError; _i < validationError_1.length; _i++) {
            var childConstraint = validationError_1[_i];
            var childError = {
                property: childConstraint.property,
                constraint: childConstraint.constraints
            };
            childConstraints.push(childError);
            if (childConstraint.children) {
                var errorFromChild = this.createChildObjectErrorResponse(childConstraint.children);
                if (errorFromChild === null || errorFromChild === void 0 ? void 0 : errorFromChild.length) {
                    childConstraints.push(errorFromChild);
                }
            }
        }
        return childConstraints;
    };
    return ValidationService;
}());
exports.ValidationService = ValidationService;
