searchState.loadedDescShard("arrow", 1, "Converts this instance into a byte slice\nConverts this <code>i256</code> into an <code>i128</code> returning <code>None</code> if this …\nConvert native type to i64.\nConvert native type to isize.\nReturn the memory representation of this integer as a byte …\nTurns a IntervalYearMonthType type into an i32 of months.\nConverts an arrow Date32Type into a chrono::NaiveDate\nConverts an arrow Date64Type into a chrono::NaiveDate\nReturns this <code>i256</code> as a low u128 and high i128\nTurns a IntervalDayTimeType into a tuple of (days, …\nTurns a IntervalMonthDayNanoType into a tuple of (months, …\nConvert native type to usize.\nReturns a copy of this <code>Fields</code> containing only those …\nSee CDataInterface docs\nMerge this field into self if it is compatible.\nAppends a <code>FieldRef</code> to this <code>SchemaBuilder</code> checking for …\nMerge schema into self if it is compatible. Struct fields …\nConvert from usize according to the <code>as</code> operator\nVerifies that every consecutive pair of <code>offsets</code> denotes a …\nVerifies that the provided buffers are valid for this …\nValidates that the specified <code>i256</code> of value can be properly …\nValidates that the specified <code>i128</code> value can be properly …\nValidates that <code>value</code> contains no more than <code>precision</code> …\nValidate that <code>precision</code> and <code>scale</code> are valid for <code>T</code>\nCreates a new empty <code>SchemaBuilder</code> with space for <code>capacity</code> …\nSet <code>DataType</code> of the <code>Field</code> and returns self.\nSets the metadata of this <code>Field</code> to be <code>metadata</code> and returns …\nSets the metadata of this <code>Schema</code> to be <code>metadata</code> and …\nSet the name of the <code>Field</code> and returns self.\nSet <code>nullable</code> of the <code>Field</code> and returns self.\nComputes the absolute value of this i256\nPerforms wrapping addition\nPerforms wrapping division\nPerforms wrapping multiplication\nNegates this i256\nPerforms wrapping exponentiation\nPerforms wrapping remainder\nPerforms wrapping subtraction\nMany different operations in the <code>arrow</code> crate return this …\nError during import or export to/from the C Data Interface\nReturned when functionality is not yet available.\nReturns the argument unchanged.\nWraps an external error in an <code>ArrowError</code>.\nCalls <code>U::from(self)</code>.\nABI-compatible struct for ArrowArray from C Data Interface …\nABI-compatible struct for <code>ArrowSchema</code> from C Data Interface\nReturns the buffer at the provided index\nReturns the child at the provided index\nReturns the dictionary if any\ncreate an empty <code>FFI_ArrowArray</code>, which can be used to …\nExports an array to raw pointers of the C Data Interface …\nreturns the format of this schema.\nReturns the argument unchanged.\nReturns the argument unchanged.\nImport ArrayData from the C Data Interface\nImport ArrayData from the C Data Interface\nTakes ownership of the pointed to <code>FFI_ArrowArray</code>\nTakes ownership of the pointed to <code>FFI_ArrowSchema</code>\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nwhether the array is empty\nWhether the array has been released\nthe length of the array\nreturns the name of this schema.\ncreates a new <code>FFI_ArrowArray</code> from existing data.\nthe null count of the array\nReturns the number of buffers\nReturns the number of children\nthe offset of the array\nExport to the C Data Interface\nSee CDataInterface docs\ncreate a new <code>FFI_ArrowSchema</code>. This fails if the fields’ …\nA <code>RecordBatchReader</code> which imports Arrays from …\nABI-compatible struct for <code>ArrayStream</code> from C Stream …\nCreates a new empty FFI_ArrowArrayStream. Used to import …\nExports a record batch reader to raw pointer of the C …\nReturns the argument unchanged.\nReturns the argument unchanged.\nTakes ownership of the pointed to <code>FFI_ArrowArrayStream</code>\nCreates a new <code>ArrowArrayStreamReader</code> from a raw pointer of …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCreates a new <code>FFI_ArrowArrayStream</code>.\nCreates a new <code>ArrowArrayStreamReader</code> from a …\nA Rust type representing an exception defined in Python …\nConvert an arrow-rs type into a PyArrow object.\nA newtype wrapper. When wrapped around a type …\nCreate a new PyArrow object from a arrow-rs type.\nGets the underlying FFI pointer, returns a borrowed …\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCreates a new <code>PyErr</code> of this type.\nA two-dimensional batch of column-oriented data with a …\nGeneric implementation of RecordBatchReader that wraps an …\nOptions that control the behaviour used when creating a …\nTrait for types that can read <code>RecordBatch</code>’s.\nTrait for types that can write <code>RecordBatch</code>’s.\nWrite footer or termination data, then mark the writer as …\nGet a reference to a column’s array by index.\nGet a reference to a column’s array by name.\nGet a reference to all columns in the record batch.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the total number of bytes of memory occupied …\nGet a reference to a column’s array by name.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nMatch field names of structs and lists. If set to <code>true</code>, …\nCreate a new RecordBatchIterator.\nCreates a new <code>RecordBatchOptions</code>\nCreates a new empty <code>RecordBatch</code>.\nReads the next <code>RecordBatch</code>.\nReturns the number of columns in the record batch.\nReturns the number of rows in each column.\nProjects the schema onto the specified columns\nRemove column by index and return it.\nOptional row count, useful for specifying a row count for …\nReturns the schema of this <code>RecordBatchReader</code>.\nReturns the <code>Schema</code> of the record batch.\nReturns a reference to the <code>Schema</code> of the record batch.\nReturn a new RecordBatch where each column is sliced …\nCreate a <code>RecordBatch</code> from an iterable list of pairs of the …\nCreate a <code>RecordBatch</code> from an iterable list of tuples of the\nCreates a <code>RecordBatch</code> from a schema and columns.\nCreates a <code>RecordBatch</code> from a schema and columns, with …\nSets the match_field_names of RecordBatchOptions and …\nSets the row_count of RecordBatchOptions and returns self\nOverride the schema of this <code>RecordBatch</code>\nWrite a single batch to the writer.\nNumber of days between 0001-01-01 and 1970-01-01\nNumber of microseconds in a second\nNumber of microseconds in a day\nNumber of milliseconds in a second\nNumber of milliseconds in a day\nNumber of nanoseconds in a second\nNumber of nanoseconds in a day\nNumber of seconds in a day\nConverts an <code>ArrowPrimitiveType</code> to <code>NaiveDate</code>\nConverts an <code>ArrowPrimitiveType</code> to <code>NaiveDateTime</code>\nConverts an <code>ArrowPrimitiveType</code> to <code>DateTime&lt;Tz&gt;</code>\nConverts an <code>ArrowPrimitiveType</code> to <code>Duration</code>\nConverts an <code>ArrowPrimitiveType</code> to <code>NaiveTime</code>\nconverts a <code>i32</code> representing a <code>date32</code> to <code>NaiveDateTime</code>\nconverts a <code>i64</code> representing a <code>date64</code> to <code>NaiveDateTime</code>\nconverts a <code>i64</code> representing a <code>duration(ms)</code> to <code>Duration</code>\nconverts a <code>i64</code> representing a <code>duration(ns)</code> to <code>Duration</code>\nconverts a <code>i64</code> representing a <code>duration(s)</code> to <code>Duration</code>\nconverts a <code>i64</code> representing a <code>duration(us)</code> to <code>Duration</code>\nconverts a <code>i32</code> representing a <code>time32(ms)</code> to <code>NaiveDateTime</code>\nconverts a <code>i32</code> representing a <code>time32(s)</code> to <code>NaiveDateTime</code>\nconverts a <code>i64</code> representing a <code>time64(ns)</code> to <code>NaiveDateTime</code>\nconverts a <code>i64</code> representing a <code>time64(us)</code> to <code>NaiveDateTime</code>\nconverts <code>NaiveTime</code> to a <code>i32</code> representing a <code>time32(ms)</code>\nconverts <code>NaiveTime</code> to a <code>i32</code> representing a <code>time32(s)</code>\nconverts <code>NaiveTime</code> to a <code>i64</code> representing a <code>time64(ns)</code>\nconverts <code>NaiveTime</code> to a <code>i64</code> representing a <code>time64(us)</code>\nconverts a <code>i64</code> representing a <code>timestamp(ms)</code> to …\nconverts a <code>i64</code> representing a <code>timestamp(ns)</code> to …\nconverts a <code>i64</code> representing a <code>timestamp(s)</code> to <code>NaiveDateTime</code>\nconverts a <code>i64</code> representing a <code>timestamp(us)</code> to …\nTensor of primitive types\nComputes the strides required assuming a column major …\nComputes the strides required assuming a row major memory …\nReturns a reference to the underlying <code>Buffer</code>\nThe data type of the <code>Tensor</code>\nThe name of dimension i\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nIndicates if the memory layout column major\nIndicates if the data is laid out contiguously in memory\nIndicates if the memory layout row major\nThe names of the dimensions\nThe number of dimensions\nCreates a new Tensor using column major memory layout\nCreates a new Tensor using row major memory layout\nThe sizes of the dimensions\nThe total number of elements in the <code>Tensor</code>\nThe number of bytes between elements in each dimension\nCreates a new <code>Tensor</code>\nUtils to make benchmarking easier\nTypes for iterating over bitmasks in 64-bit chunks\nTypes for iterating over packed bitmasks\nUtils for working with packed bit masks\nUtils for working with bits\nUtilities to generate random arrays and batches\nFunctions for printing array values, as strings, for …\nUtilities for pretty printing record batches. Note this …\nString Writer This string writer encapsulates …\nUtils to make testing easier\nCreates an random (but fixed-seeded) binary array of a …\nCreates an random (but fixed-seeded) array of a given size …\nCreates a random (but fixed-seeded) dictionary array of a …\nCreates an random (but fixed-seeded) array of a given size …\nCreates an random (but fixed-seeded) array of a given size …\nCreate primitive run array for given logical and physical …\nCreates a random (but fixed-seeded) dictionary array of a …\nCreates an random (but fixed-seeded) array of a given size …\nCreate string array to be used by run array builder. The …\nCreates a random (but fixed-seeded) array of a given size, …\nCreates an random (but fixed-seeded) array of a given size …\nCreates a random (but fixed-seeded) array of a given size, …\nIterates over an arbitrarily aligned byte buffer\nIterates over an arbitrarily aligned byte buffer\nReturns the number of chunks\nCounts the number of ones\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns an iterator over chunks of 64 bits represented as …\nReturns an iterator over chunks of 64 bits, with the …\nCreate a from a byte array, and and an offset and length …\nReturns the bitmask of remaining bits\nReturns the number of remaining bits, guaranteed to be …\nAn iterator of <code>usize</code> whose index in a provided bitmask is …\nIterator over the bits within a packed bitmask\nIterator of contiguous ranges of set bits within a …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCreate a new <code>BitIterator</code> from the provided <code>buffer</code>, and …\nCreate a new <code>BitSliceIterator</code> from the provided <code>buffer</code>, …\nCreate a new <code>BitIndexIterator</code> from the provide <code>buffer</code>, and …\nCalls the provided closure for each index in the provided …\nSets all bits on <code>write_data</code> in the range …\nReturns the ceil of <code>value</code>/<code>divisor</code>\nReturns whether bit at position <code>i</code> in <code>data</code> is set or not\nReturns whether bit at position <code>i</code> in <code>data</code> is set or not.\nReturns the nearest number that is <code>&gt;=</code> than <code>num</code> and is a …\nReturns the nearest multiple of <code>factor</code> that is <code>&gt;=</code> than <code>num</code>…\nSets bit at position <code>i</code> for <code>data</code> to 1\nSets bit at position <code>i</code> for <code>data</code>\nSets bit at position <code>i</code> for <code>data</code> to 0\nSets bit at position <code>i</code> for <code>data</code> to 0\nCreate a random ArrayRef from a DataType with a length, …\nCreate a random RecordBatch from a schema\nGenerate random offsets for list arrays\nA string formatter for an <code>Array</code>\nFormat for displaying durations\nOptions for formatting arrays\nISO 8601 - <code>P198DT72932.972880S</code>\nA human readable representation - …\nImplements <code>Display</code> for a specific array value\nGet the value at the given row in an array as a String.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConverts numeric type to a <code>String</code>\nReturns an <code>ArrayFormatter</code> that can be used to format <code>array</code>\nFallibly converts this to a string\nReturns a <code>ValueFormatter</code> that implements <code>Display</code> for the …\nOverrides the format used for <code>DataType::Date32</code> columns\nOverrides the format used for <code>DataType::Date64</code> columns\nIf set to <code>true</code> any formatting errors will be written to …\nOverrides the format used for duration columns\nOverrides the string used to represent a null\nOverrides the format used for <code>DataType::Time32</code> and …\nOverrides the format used for <code>DataType::Timestamp</code> columns …\nOverrides the format used for <code>DataType::Timestamp</code> columns …\nWrites this value to the provided <code>Write</code>\nCreate a visual representation of record batches\nCreate a visual representation of record batches\nCreate a visual representation of columns\nPrints a visual representation of record batches to stdout\nPrints a visual representation of a list of column to …\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nAn iterator that is untruthful about its actual length\nReturns the arrow test data directory, which is by default …\nHow many items this iterator claims it will make\nwhere the iterator currently is\nReturns the argument unchanged.\nReturns a directory path for finding test data.\nReturns file handle for a temp file in ‘target’ …\nCalls <code>U::from(self)</code>.\nThe items to return. If there are fewer items than <code>limit</code> …\nHow many items will this iterator <em>actually</em> make\nCreate a new iterator for <code>&lt;limit&gt;</code> items, but that reports …\nReturns the parquest test data directory, which is by …\nReturns a vector of size <code>n</code>, filled with randomly generated …\nReturns fixed seedable RNG\nreport whatever the iterator says to")