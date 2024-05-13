searchState.loadedDescShard("arrow_csv", 0, "Transfer data between the Arrow memory format and CSV …\nCSV Reader\nCSV Writer\nCSV file reader\nA push-based interface for decoding CSV data from an …\nThe format specification for the CSV file\nA wrapper over <code>Option&lt;Regex&gt;</code> to check if the value is <code>NULL</code>.\nOrder should match <code>InferredDataType</code>\nCSV file reader using <code>std::io::BufReader</code>\nCSV file reader builder\nNumber of records per batch\nBatch size (number of records to load each time)\nThe bounds over which to scan the reader. <code>None</code> starts from …\nCreate a new <code>Reader</code> from a non-buffered reader\nCreate a new <code>BufReader</code> from a buffered reader\nBuilds a decoder that can be used to decode CSV from an …\nBuild a <code>csv_core::Reader</code> for this <code>Format</code>\nBuild a <code>csv::Reader</code> for this <code>Format</code>\nReturns the number of records that can be read before …\nDecode records from <code>buf</code> returning the number of bytes read\nThe decoder\nThe decoder\nEnd line number\nFlushes the currently buffered data to a <code>RecordBatch</code>\nFormat of the CSV file\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the inferred data type\nInfer the schema of a CSV file by reading through the …\nInfer schema of CSV records provided by struct that …\nInfer schema of CSV records from the provided <code>reader</code>\nInfer schema from a list of CSV files by reading through …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns true if the value should be considered as <code>NULL</code> …\nCurrent line number\nCreate a new builder for configuring CSV parsing options.\nCheck if the string matches this pattern for <code>NULL</code>.\nPacked booleans indicating type\nParses a slice of <code>StringRecords</code> into a RecordBatch\nOptional projection for which columns to load (zero-based …\nOptional projection for which columns to load (zero-based …\nFile reader\nFile reader\nA decoder for <code>StringRecords</code>\nReturns the schema of the reader, useful for getting the …\nReturns the schema of the reader, useful for getting the …\nExplicit schema for the CSV file\nSchema of the CSV file\nRows to skip\nUpdates the <code>InferredDataType</code> with the given string\nSet the batch size (number of records to load at one time)\nSet the bounds over which to scan the reader. <code>start</code> and <code>end</code>…\nSet the CSV file’s column delimiter as a byte character\nOverrides the <code>Format</code> of this `ReaderBuilder\nSet whether the CSV file has a header\nProvide a regex to match null values, defaults to <code>^$</code>\nProvide a regex to match null values, defaults to <code>^$</code>\nSet the reader’s column projection\nWhether to allow truncated rows when parsing.\nWhether to allow truncated rows when parsing.\nThe estimated length of a field in bytes\nThe minimum amount of data in a single read\n<code>RecordDecoder</code> provides a push-based interface to decoder …\nA single parsed, UTF-8 CSV record\nA collection of parsed, UTF-8 CSV records\nClears the current contents of the decoder\nThe number of fields read for the current record\nDecoded field data\nOffsets into data\nDecodes records from <code>input</code> returning the number of records …\nFlushes the current contents of the reader\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns true if the decoder is empty\nReturns the current number of buffered records\nThe current line number\nThe expected number of fields per row\nThe number of rows buffered\nOffsets delimiting field start positions\nThe current offset into <code>self.offsets</code>\nWhether rows with less than expected columns are …\nA CSV writer\nA CSV writer builder\nIs the beginning-of-writer\nCreate a new <code>Writer</code>\nGet the CSV file’s date format if set, defaults to …\nThe date format for date arrays, defaults to RFC3339\nOptional date format for date arrays\nGet the CSV file’s datetime format if set, defaults to …\nThe datetime format for datetime arrays, defaults to …\nOptional datetime format for datetime arrays\nGet the CSV file’s column delimiter as a byte character\nOptional column delimiter. Defaults to <code>b&#39;,&#39;</code>\nGet whether double quote escapes are enabled\nEnable double quote escapes. Defaults to <code>true</code>\nGet the CSV file’s escape character as a byte character\nOptional escape character. Defaults to <code>b&#39;\\\\&#39;</code>\nReturns the argument unchanged.\nReturns the argument unchanged.\nWhether to write column names as file headers. Defaults to …\nWhether file should be written with headers, defaults to …\nReturns <code>true</code> if this writer is configured to write a header\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nUnwraps this <code>Writer&lt;W&gt;</code>, returning the underlying writer.\nCreate a new CsvWriter from a writable object, with …\nCreate a new builder for configuring CSV writing options.\nGet the value to represent null in output\nThe value to represent null entries, defaults to …\nOptional value to represent null\nGet the CSV file’s quote character as a byte character\nOptional quote character. Defaults to <code>b&#39;&quot;&#39;</code>\nGet the CSV file’s datetime time if set, defaults to …\nThe time format for time arrays, defaults to RFC3339\nOptional time format for time arrays\nGet the CSV file’s timestamp format if set, defaults to …\nThe timestamp format for timestamp arrays, defaults to …\nOptional timestamp format for timestamp arrays\nThe timestamp format for timestamp (with timezone) arrays, …\nOptional timestamp format for timestamp with timezone …\nSet the CSV file’s date format\nSet the CSV file’s datetime format\nSet the CSV file’s column delimiter as a byte character\nSet whether to enable double quote escapes\nSet the CSV file’s escape character as a byte character\nSet whether to write the CSV file with a header\nSet the value to represent null in output\nSet the CSV file’s quote character as a byte character\nUse RFC3339 format for date/time/timestamps (default)\nSet the CSV file’s time format\nSet the CSV file’s timestamp format\nWrite a vector of record batches to a writable object\nThe object to write to")