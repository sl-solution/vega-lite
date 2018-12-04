import { FacetMapping } from '../../facet';
import { DataFlowNode } from './dataflow';
import { WindowTransformNode } from './window';
export declare function makeWindowFromFacet(parent: DataFlowNode, facet: FacetMapping<string>): WindowTransformNode;
