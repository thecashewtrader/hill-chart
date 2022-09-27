import { Axis } from 'd3-axis';
import { NumberValue, ScaleLinear } from 'd3-scale';
import { Selection } from 'd3-selection';
import { Line } from 'd3-shape';
import EventEmitter from 'event-emitter-es6';

export type Config = {
  target: 'svg';
  width: number;
  height: number;
  preview: boolean;
  darkMode: boolean;
  /**
   * TODO: remove support for undefined
   * @default 'transparent'
   */
  backgroundColor: string | boolean | undefined;
  footerText: {
    show: boolean;
    fontSize: number;
  };
  margin: {
    top: number;
    right: number;
    bottom: number;
    left: number;
  };
};

export type DataPoint = {
  id: string;
  color: string;
  description: string;
  link?: string;
  /**
   * @default 10
   */
  size?: number;
  /**
   * @default 0
   */
  x?: number;
  /**
   * @default 0
   */
  y?: number;
};

export type Data = DataPoint[];

export interface IHillChartClass extends EventEmitter, Config {
  data: Data;
  chartWidth: number;
  chartHeight: number;
  colorScheme: 'hill-chart-dark' | 'hill-chart-light';
  svg: Selection<SVGGElement, DataPoint, HTMLElement, any>;
  xScale: ScaleLinear<number, number, never>;
  yScale: ScaleLinear<number, number, never>;
  bottomLine: Axis<NumberValue>;
  mainLineCurvePoints: { x: number; y: number }[];
  line: Line<Pick<DataPoint, 'x' | 'y'>>;
}
