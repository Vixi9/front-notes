export interface FlatGradeInterface {
  name: string;
  code?: string;
  coefficient?: number;
  scale?: number;
  value?: number;
}

export class FlatGrade implements FlatGradeInterface {
  name: string;
  code?: string | undefined;
  coefficient?: number | undefined;
  scale?: number | undefined;
  value?: number | undefined;

  constructor(
    name: string,
    code?: string,
    coefficient?: number,
    scale?: number,
    value?: number
  ) {
    this.name = name;
    this.code = code;
    this.coefficient = coefficient;
    this.scale = scale;
    this.value = value;
  }
}
