var documenterSearchIndex = {"docs":
[{"location":"api/#API","page":"API","title":"API","text":"","category":"section"},{"location":"api/","page":"API","title":"API","text":"DocTestSetup  = quote\n    using UpROOT\nend","category":"page"},{"location":"api/#Modules","page":"API","title":"Modules","text":"","category":"section"},{"location":"api/","page":"API","title":"API","text":"Order = [:module]","category":"page"},{"location":"api/#Types-and-constants","page":"API","title":"Types and constants","text":"","category":"section"},{"location":"api/","page":"API","title":"API","text":"Order = [:type, :constant]","category":"page"},{"location":"api/#Functions-and-macros","page":"API","title":"Functions and macros","text":"","category":"section"},{"location":"api/","page":"API","title":"API","text":"Order = [:macro, :function]","category":"page"},{"location":"api/#Documentation","page":"API","title":"Documentation","text":"","category":"section"},{"location":"api/","page":"API","title":"API","text":"Modules = [UpROOT]\nOrder = [:module, :type, :constant, :macro, :function]","category":"page"},{"location":"api/#UpROOT.OpaqueObject","page":"API","title":"UpROOT.OpaqueObject","text":"UpROOT.OpaqueObject{tp,B<:AbstractVector{UInt8}}\n\nAn opaque object of symbolic type tp. tp must be a Symbol. Use the data field to access the byte representation.\n\n\n\n\n\n","category":"type"},{"location":"api/#UpROOT.OpaqueObjectArray","page":"API","title":"UpROOT.OpaqueObjectArray","text":"OpaqueObjectArray{tp,N,BA<:AbstractArray{<:AbstractBlob,N}}\n\nAn array of [UpROOT.OpaqueObject]s.\n\n\n\n\n\n","category":"type"},{"location":"api/#UpROOT.TBranch","page":"API","title":"UpROOT.TBranch","text":"TBranch <: AbstractVector{Any}\n\nUpROOT.TBranch is a wrapper around Python objects with mix-in uproot.tree.TBranchMethods. It behaves like a Julia AbstractVector. Ff the branch has children, it also behaves like a Tables.Table (with column access).\n\nTBranch is an on-disk data structure, iteration over single elements is very inefficient.\n\nLimitations: Write access is not implemented yet.\n\n\n\n\n\n","category":"type"},{"location":"api/#UpROOT.TDirectory","page":"API","title":"UpROOT.TDirectory","text":"TDirectory\n\nUpROOT.TDirectory is a wrapper around Python objects of type uproot.rootio.ROOTDirectory.\n\nTDirectory behaves similar to a Julia Dict, it supports the functions keys, length and getindex.\n\nLimitations: Write access is not implemented yet.\n\nTFile is defined as an alias for TDirectory in UpROOT.jl.\n\n\n\n\n\n","category":"type"},{"location":"api/#UpROOT.TFile","page":"API","title":"UpROOT.TFile","text":"TFile = TDirectory\n\nThe uproot Python package doesn't use separate types for the ROOT classes TFile and TDirectoy - so in UpROOT.jl, so in UpROOT.jl, TFile is just defined as an alias for TDirectory.\n\nConstructors:\n\n* `TFile(filename::AbstractString)::TFile`\n\nUse TFile(filename) to open files instead of TDirectory(filename) for increased clarity in your code.\n\n\n\n\n\n","category":"type"},{"location":"api/#UpROOT.TTree","page":"API","title":"UpROOT.TTree","text":"TTree <: AbstractVector{Any}\n\nUpROOT.TTree is a wrapper around Python objects with mix-in uproot.tree.TTreeMethods. It behaves like a Julia AbstractVector and Tables.Table (with column access).\n\nTTree is an on-disk data structure, iteration over single elements is very inefficient.\n\nEven though TTree is semantically a vector over the tree entries, a two dimensional getindex(tree::TTree, entries, branches) is defined for convenience. So you may use, e.g.:\n\ntree[1:5, (:branch1, :branch2)]\ntree[:, [:branch1, :branch2]]\ntree[[1,4,7,10], [\"branch1\", \"branch2\"]]\n\nLimitations: Write access is not implemented yet.\n\n\n\n\n\n","category":"type"},{"location":"api/#UpROOT.pyobj-Tuple{Any}","page":"API","title":"UpROOT.pyobj","text":"UpROOT.pyobj(x)::PyObject\n\nGet the python object wrapped by Julia object x. x may be a TFile/TDirectory, TDirectory or TBranch.\n\n\n\n\n\n","category":"method"},{"location":"api/#UpROOT.testdatadir-Tuple{}","page":"API","title":"UpROOT.testdatadir","text":"UpROOT.testdatadir()::String\n\nPath to some test data installed by UpROOT.jl for testing and experimentation purposes.\n\nUse UpROOT.testfiles to get Dict of all test files.\n\n\n\n\n\n","category":"method"},{"location":"LICENSE/#LICENSE","page":"LICENSE","title":"LICENSE","text":"","category":"section"},{"location":"LICENSE/","page":"LICENSE","title":"LICENSE","text":"using Markdown\nMarkdown.parse_file(joinpath(@__DIR__, \"..\", \"..\", \"LICENSE.md\"))","category":"page"},{"location":"#UpROOT.jl","page":"Home","title":"UpROOT.jl","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"UpROOT.jl is a Julia wrapper around the Python uproot package.","category":"page"},{"location":"","page":"Home","title":"Home","text":"uproot makes it possible to read and write CERN ROOT files via pure Python (with certain limitations), without requiring a ROOT installation.","category":"page"},{"location":"#Installation","page":"Home","title":"Installation","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"UpROOT.jl requires the Python uproot package. If PyCall.jl is configured to use Conda.jl for package management (default on OS-X and Windows systems), uproot should be installed automatically when UpROOT.jl is loaded for the first time. Otherwise, please install uproot manually before using UpROOT.jl.","category":"page"},{"location":"#Usage","page":"Home","title":"Usage","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"UpROOT.jl exposes TFiles and TDirectories with a Dict-like API, TTrees and TBrances as exposed as out-of-core AbstractVectors that also support the Tables interface (with column-access). Opening a ROOT file and reading the contents is straightforward:","category":"page"},{"location":"","page":"Home","title":"Home","text":"using UpROOT, Tables, TypedTables, ArraysOfArrays\n\nfile = TFile(UpROOT.testfiles[\"HZZ\"])\nprintln(keys(file))\n\ntree = file[\"events\"]\nTables.istable(tree) == true\n\ntree[1] isa NamedTuple\ntree[1:5] isa TypedTables.Table\n\ntree.Jet_E isa AbstractVector\ntree.Jet_E[1:5] isa VectorOfVectors","category":"page"},{"location":"","page":"Home","title":"Home","text":"In addition to the standard Python/Julia type conversions provided by PyCall.jl, UpROOT.jl maps some special Python types used by uproot (e.g. types from the awkward-array package) to Julia equivalents like VectorOfVectorss and Tables.","category":"page"},{"location":"#Limitations","page":"Home","title":"Limitations","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Quite a bit of functionality of the Python uproot package (like writing files and caching of data) is not implemented/wrapped by UpROOT.jl yet. For now, please use the function UpROOT.pyobj to get the Python object wrapped by any UpROOT.jl type and access the unwrapped features directly via PyCall.jl. The python imports/modules uproot and awkward are available as UpROOT.uproot and UpROOT.awkward.","category":"page"}]
}
