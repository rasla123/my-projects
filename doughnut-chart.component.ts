import { Component } from '@angular/core';
import * as d3 from 'd3';
import axios from 'axios';
import { select, pie, arc,  BaseType, Selection } from 'd3';
import {} from '../models/employeee.model';
interface Employee {
  id: number;
  firstname: string;
  lastname: string;
  birthday: string;
  gender: string;
  role: string;
  email: string;
  mobilenumber: string;
  profile: string;
}
@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.scss']
})
export class DoughnutChartComponent {

  constructor() {}

  ngOnInit(): void {
    this.loadData();
  }

  async loadData() {
    try {
      const response = await axios.get<Employee[]>('http://localhost:3000/posts');
      const employeeData = response.data;
      const activeCount = employeeData.filter((employee: Employee) => employee.role === 'Active').length;
      const inactiveCount = employeeData.filter((employee: Employee) => employee.role === 'InActive').length;

      this.createDonutChart(activeCount, inactiveCount);
    } catch (error) {
      console.error('Error loading data:', error);
    }
  }


  createDonutChart(activeCount: number, inactiveCount: number) {
    const data = [
      { label: 'Active', value: activeCount },
      { label: 'InActive', value: inactiveCount }
    ];
  
    const width = 300;
    const height = 300;
    const radius = Math.min(width, height) / 2;
  
    const svg = d3.select('#donut-chart')
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${width / 2},${height / 2})`);
  
    const color = d3.scaleOrdinal<string>()
      .domain(data.map(d => d.label))
      .range(['#66c2a5', '#fc8d62']);
  
    const pieData = d3.pie<any>().value(d => d.value)(data);
  
    const arcGenerator = d3.arc<d3.PieArcDatum<any>>()
      .innerRadius(radius * 0.6)
      .outerRadius(radius);
  
    const arcs = svg.selectAll('arc')
      .data(pieData)
      .enter()
      .append('g')
      .attr('class', 'arc');
  
    arcs.append('path')
      .attr('d', arcGenerator)
      .attr('fill', d => color(d.data.label));
  
    arcs.append('text')
      .attr('transform', d => `translate(${arcGenerator.centroid(d)})`)
      .attr('text-anchor', 'middle')
      .text(d => d.data.label);
  }
}