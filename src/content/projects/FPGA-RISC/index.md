---
title: "FPGA RISC Machine"
summary: "Design and implementation of a Turing-complete 16-bit RISC architecture using SystemVerilog, deployed on an FPGA board."
date: "Jan 1 2023"
draft: false
tags:
- SystemVerilog
- FPGA
demoUrl: https://youtu.be/biTuX5kdb8c
repoUrl: https://github.com/Shengw3n/FPGA-Reduced-Instruction-Set-Computer/tree/main
---

# FPGA Reduced Instruction Set Computer (RISC) Project

## Introduction

The project involves designing, building, and testing a Turing Complete 16-bit RISC machine using System Verilog on an FPGA board. Key softwares used include Quartus and Questa/ModelSim.

![FPGA](./352787519-aa32b313-8efd-4664-84c3-b923140f381d.jpg)


## Project Features

- **RISC Processor Design:** Implements a simple RISC processor architecture.
- **SystemVerilog Implementation:** Written in SystemVerilog hardware description language.
- **Simulation and Testing:** Includes testbenches for thorough verification of the processor via Questa/ModelSim.
- **FPGA Deployment:** Configured to run on an FPGA development board (DE1-Soc).

## Supported Instructions

The processor can execute a variety of ARM instructions. The following diagram illustrates the ARM instruction encodings that the machine can run:
![294788885-803b9642-d9c8-4102-ba90-291692835259](./352787491-79f892f6-46ba-4f79-8f29-117b0704b804.png)
![294788895-0a883541-2534-45bb-bd96-481d11b98fd3](./352787493-640ce76f-16c8-49fe-a44b-0b1ef5f74b38.png)

## Hardware Components

- **FPGA Board:** DE1-SoC development board
- **Processor Design:** Custom RISC processor implemented in SystemVerilog
- **Memory:** On-chip memory for instruction and data storage

## Software Description

### SystemVerilog Code

Utilizing modularization, the processor is designed in SystemVerilog and includes several modules for different components of the processor. The main design files are:

- `RISC_top.sv`: Top-level module for the RISC processor
- `cpu.sv`: Central Processing Unit module
- `datapath.sv`: Datapath module
- `alu.sv`: Arithmetic Logic Unit module
- `instruction_decoder.sv`: Instruction Decoder module
- `finite_state_machine.sv`: Finite State Machine module
- `regfile.sv`: Register File module
- `shifter.sv`: Shifter module

### Testbenches
- `cpu_tb.sv`: Testbench for the CPU
- `datapath_tb.sv`: Testbench for the datapath
- `RISC_top_tb.sv`: Testbench for the top-level module
- `RISC_check.sv`: Verification module

## Project Demonstration

- A video demonstration of the RISC processor in action voiced by my partner Afeef can be found linked here: https://youtu.be/biTuX5kdb8c

## Future Improvements

- Enhance the processor design to support more complex instructions.
- Implement pipelining for improved performance.
- Expand the testbench coverage to include more edge cases and scenarios.
