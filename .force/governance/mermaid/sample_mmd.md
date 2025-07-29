```mermaid
%% Logical Grouping: Reference -> Translation -> FORCE

flowchart LR

%% Reference Namespace Group
subgraph Reference_Namespace["Reference Namespace"]
    direction TB
    subgraph Anthropic_Reference["Anthropic Reference"]
        AA["Agent Definition"]
        AB["Workflows"]
        AC["Tools"]
        AD["Patterns"]
        AE["Best Practices"]
        AA1["Identity & Purpose"]
        AA2["Dynamic Process Control"]
        AA3["Autonomy vs Code Workflows"]
        AB1["Prompt Chaining"]
        AB2["Routing"]
        AB3["Parallelization"]
        AB4["Orchestrator Workers"]
        AB5["Evaluator Optimizer"]
        AC1["Augmented LLM with Tools"]
        AC2["Tool Design & Documentation"]
        AC3["Tool Invocation Patterns"]
        AD1["Composable Agent Patterns"]
        AD2["Pattern Combination & Customization"]
        AE1["Simplicity"]
        AE2["Transparency"]
        AE3["Careful Interface Design"]
        AA --> AA1
        AA --> AA2
        AA --> AA3
        AB --> AB1
        AB --> AB2
        AB --> AB3
        AB --> AB4
        AB --> AB5
        AC --> AC1
        AC --> AC2
        AC --> AC3
        AD --> AD1
        AD --> AD2
        AE --> AE1
        AE --> AE2
        AE --> AE3
    end

    subgraph Microsoft_Reference["Microsoft Reference"]
        MA["Agent Core Concepts"]
        MB["Agent Behaviors"]
        MC["Toolchains"]
        MD["Agent Patterns"]
        MA1["Identity and Configuration"]
        MB1["Planning and Reasoning"]
        MC1["Tool Integration"]
        MD1["Orchestration Patterns"]
        MA --> MA1
        MB --> MB1
        MC --> MC1
        MD --> MD1
    end
end

%% Translation Layer Group
subgraph Translation_Layer["Translation Layer"]
    direction TB
    Transform_Tool["FORCE Anthropic Transform Tool"]
    Transform_Tool_Ms["FORCE Microsoft Transform Tool"]
end

%% FORCE Namespace Group
subgraph FORCE_Namespace["FORCE Namespace"]
    direction TB
    F_Agent["Agent Components"]
    F_Tool["Tool Components"]
    F_Pattern["Pattern Components"]
    F_Planner["Planner Components"]
    F_Ag_props["Properties: id, description, model, instructions, tools, planner"]
    F_Tool_props["Function definitions, External references, Delegated agents"]
    F_Patt_props["Workflow and orchestration patterns"]
    F_Plan_props["Planning parameters & multi-step logic"]
    F_Agent --> F_Ag_props
    F_Tool --> F_Tool_props
    F_Pattern --> F_Patt_props
    F_Planner --> F_Plan_props
end

%% Reference to Translation
Reference_Namespace --> Transform_Tool
Reference_Namespace --> Transform_Tool_Ms

%% Translation to FORCE
Transform_Tool --> F_Agent
Transform_Tool --> F_Tool
Transform_Tool --> F_Pattern
Transform_Tool --> F_Planner
Transform_Tool_Ms --> F_Agent
Transform_Tool_Ms --> F_Tool
Transform_Tool_Ms --> F_Pattern
Transform_Tool_Ms --> F_Planner
```
```plantuml
@startuml
package "Reference Namespace" {
  package "Anthropic Reference" {
    [Agent Definition]
    [Workflows]
    [Tools]
    [Patterns]
    [Best Practices]
    [Agent Definition] --> [Identity & Purpose]
    [Agent Definition] --> [Dynamic Process Control]
    [Agent Definition] --> [Autonomy vs Code Workflows]
    [Workflows] --> [Prompt Chaining]
    [Workflows] --> [Routing]
    [Workflows] --> [Parallelization]
    [Workflows] --> [Orchestrator Workers]
    [Workflows] --> [Evaluator Optimizer]
    [Tools] --> [Augmented LLM with Tools]
    [Tools] --> [Tool Design & Documentation]
    [Tools] --> [Tool Invocation Patterns]
    [Patterns] --> [Composable Agent Patterns]
    [Patterns] --> [Pattern Combination & Customization]
    [Best Practices] --> [Simplicity]
    [Best Practices] --> [Transparency]
    [Best Practices] --> [Careful Interface Design]
  }
  package "FORCE Namespace" {
    [Agent Components]
    [Tool Components]
    [Pattern Components]
    [Planner Components]
    [Agent Components] --> [Properties: id, description, model, instructions, tools, planner]
    [Tool Components] --> [Function definitions, External references, Delegated agents]
    [Pattern Components] --> [Workflow and orchestration patterns]
    [Planner Components] --> [Planning parameters & multi-step logic]
  }
  [Anthropic Reference] --> [FORCE Namespace] : "FORCE Anthropic Transform Tool"
}
@enduml