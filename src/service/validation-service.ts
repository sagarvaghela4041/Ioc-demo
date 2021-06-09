import { ValidationError } from "class-validator";

export class ValidationService {
    createResponse(validationErrors: ValidationError[]): ValidationError[] {
        const response = [];
        for (const validationError of validationErrors) {
            const error = {
                property: validationError.property,
                constraints: validationError.constraints
            }
            response.push(error);
            if (validationError.children) {
                const errorFromChild = this.createChildObjectErrorResponse(validationError.children) as any;
                if (errorFromChild?.length) {
                    response.push(errorFromChild);
                }
            }
        }
        return response;
    }

    createChildObjectErrorResponse(validationError: ValidationError[]): { property: string, constraint: any }[] {
        const childConstraints = [];
        for (const childConstraint of validationError) {
            const childError = {
                property: childConstraint.property,
                constraint: childConstraint.constraints
            }
            childConstraints.push(childError);
            if (childConstraint.children) {
                const errorFromChild = this.createChildObjectErrorResponse(childConstraint.children) as any;
                if (errorFromChild?.length) {
                    childConstraints.push(errorFromChild);
                }
            }

        }
        return (childConstraints as { property: string, constraint: any }[]);
    }
}