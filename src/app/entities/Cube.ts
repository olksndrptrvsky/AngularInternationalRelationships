export interface Hierarchy {
  caption: string;
  levels: string[];
}


export interface Dimension {
  caption: string;
  hierarchies: Hierarchy[];
}

export interface Cube {
  caption: string;
  dimensions: Dimension[];
}
