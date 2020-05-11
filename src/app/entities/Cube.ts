export class Member {
  caption: string;
}
export class Level {
  caption: string;
  members: Member[];
}

export class Hierarchy {
  caption: string;
  levels: Level[];
}


export class Dimension {
  caption: string;
  hierarchies: Hierarchy[];
}

export class Cube {
  caption: string;
  dimensions: Dimension[];
}
