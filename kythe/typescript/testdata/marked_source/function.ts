
//- @myFunction defines/binding MyFunction
//- MyFunction code MyFunctionCode
//- 
//- MyFunctionCode child.0 MyFunctionContext
//- MyFunctionContext.kind "CONTEXT"
//- MyFunctionContext.pre_text "function"
//-
//- MyFunctionCode child.1 MyFunctionSpace
//- MyFunctionSpace.pre_text " "
//- 
//- MyFunctionCode child.2 MyFunctionName
//- MyFunctionName.kind "IDENTIFIER"
//- MyFunctionName.pre_text "myFunction"
//-
//- MyFunctionCode child.3 MyFunctionParams
//- MyFunctionParams.kind "PARAMETER_LOOKUP_BY_PARAM"
//- MyFunctionParams.pre_text "("
//- MyFunctionParams.post_text ")"
//- MyFunctionParams.post_child_text ", "
//- 
//- MyFunctionCode child.4 MyFunctionReturnType
//- MyFunctionReturnType.kind "TYPE"
//- MyFunctionReturnType.pre_text ": "
//- MyFunctionReturnType.post_text "number"
//-
//- @arg defines/binding Arg
//- Arg code ArgCode
//- ArgCode.kind "BOX"
//- 
//- ArgCode child.0 ArgCodeContext
//- ArgCodeContext.kind "CONTEXT"
//- ArgCodeContext.pre_text "(parameter)"
//-
//- ArgCode child.1 ArgCodeSpace
//- ArgCodeSpace.pre_text " "
//-
//- ArgCode child.2 ArgCodeId
//- ArgCodeId.kind "IDENTIFIER"
//- ArgCodeId.pre_text "arg"
//-
//- ArgCode child.3 ArgCodeType
//- ArgCodeType.kind "TYPE"
//- ArgCodeType.pre_text ": "
//- ArgCodeType.post_text "string"
//-
//- ArgCode child.4 ArgCodeEqual
//- ArgCodeEqual.kind "BOX"
//- ArgCodeEqual.pre_text " = "
//-
//- ArgCode child.5 ArgCodeDefaultValue
//- ArgCodeDefaultValue.kind "INITIALIZER"
//- ArgCodeDefaultValue.pre_text "'0'"
function myFunction(arg: string = '0'): number {
    return 0;
}
