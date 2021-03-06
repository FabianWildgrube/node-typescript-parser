import { Declaration } from '../declarations/Declaration';
import { Export } from '../exports/Export';
import { Import } from '../imports/Import';
import { Node } from '../Node';
import { Resource } from './Resource';
/**
 * TypeScript resource. Declaration of a typescript module (i.e. declare module "foobar").
 *
 * @export
 * @class Module
 * @implements {Resource}
 * @implements {Node}
 */
export declare class Module implements Resource, Node {
    name: string;
    start: number;
    end: number;
    imports: Import[];
    exports: Export[];
    declarations: Declaration[];
    resources: Resource[];
    usages: string[];
    get identifier(): string;
    get nonLocalUsages(): string[];
    constructor(name: string, start: number, end: number);
    /**
     * Function that calculates the alias name of a namespace.
     * Removes all underlines and dashes and camelcases the name.
     *
     * @returns {string}
     *
     * @memberof Module
     */
    getNamespaceAlias(): string;
}
