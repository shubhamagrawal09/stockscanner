import React from 'react'
export default interface Criteria {
    type: "plain_text" | "variable";
    text: string;
    variable?: {
      [$key: string]: {
        type: "value" | "indicator";
        values: (string | number)[];
        study_type?: "cci" | "rsi";
        parameter_name?: "period";
        min_value?: number;
        max_value?: number;
        default_value?: number;
      };
    };
  }
  
  export default interface Scan {
    id: number;
    name: string;
    tag: string;
    color: string;
    criteria: Criteria[];
  }