(function() {var type_impls = {
"arrow_array":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Array-for-GenericByteViewArray%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/arrow_array/array/byte_view_array.rs.html#280-329\">source</a><a href=\"#impl-Array-for-GenericByteViewArray%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"arrow_array/types/trait.ByteViewType.html\" title=\"trait arrow_array::types::ByteViewType\">ByteViewType</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"arrow_array/array/trait.Array.html\" title=\"trait arrow_array::array::Array\">Array</a> for <a class=\"struct\" href=\"arrow_array/array/byte_view_array/struct.GenericByteViewArray.html\" title=\"struct arrow_array::array::byte_view_array::GenericByteViewArray\">GenericByteViewArray</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.as_any\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/array/byte_view_array.rs.html#281-283\">source</a><a href=\"#method.as_any\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"arrow_array/array/trait.Array.html#tymethod.as_any\" class=\"fn\">as_any</a>(&amp;self) -&gt; &amp;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/any/trait.Any.html\" title=\"trait core::any::Any\">Any</a></h4></section></summary><div class='docblock'>Returns the array as <a href=\"https://doc.rust-lang.org/nightly/core/any/trait.Any.html\" title=\"trait core::any::Any\"><code>Any</code></a> so that it can be\ndowncasted to a specific implementation. <a href=\"arrow_array/array/trait.Array.html#tymethod.as_any\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.to_data\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/array/byte_view_array.rs.html#285-287\">source</a><a href=\"#method.to_data\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"arrow_array/array/trait.Array.html#tymethod.to_data\" class=\"fn\">to_data</a>(&amp;self) -&gt; <a class=\"struct\" href=\"arrow_data/data/struct.ArrayData.html\" title=\"struct arrow_data::data::ArrayData\">ArrayData</a></h4></section></summary><div class='docblock'>Returns the underlying data of this array</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.into_data\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/array/byte_view_array.rs.html#289-291\">source</a><a href=\"#method.into_data\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"arrow_array/array/trait.Array.html#tymethod.into_data\" class=\"fn\">into_data</a>(self) -&gt; <a class=\"struct\" href=\"arrow_data/data/struct.ArrayData.html\" title=\"struct arrow_data::data::ArrayData\">ArrayData</a></h4></section></summary><div class='docblock'>Returns the underlying data of this array <a href=\"arrow_array/array/trait.Array.html#tymethod.into_data\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.data_type\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/array/byte_view_array.rs.html#293-295\">source</a><a href=\"#method.data_type\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"arrow_array/array/trait.Array.html#tymethod.data_type\" class=\"fn\">data_type</a>(&amp;self) -&gt; &amp;DataType</h4></section></summary><div class='docblock'>Returns a reference to the [<code>DataType</code>] of this array. <a href=\"arrow_array/array/trait.Array.html#tymethod.data_type\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.slice\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/array/byte_view_array.rs.html#297-299\">source</a><a href=\"#method.slice\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"arrow_array/array/trait.Array.html#tymethod.slice\" class=\"fn\">slice</a>(&amp;self, offset: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>, length: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>) -&gt; <a class=\"type\" href=\"arrow_array/array/type.ArrayRef.html\" title=\"type arrow_array::array::ArrayRef\">ArrayRef</a></h4></section></summary><div class='docblock'>Returns a zero-copy slice of this array with the indicated offset and length. <a href=\"arrow_array/array/trait.Array.html#tymethod.slice\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.len\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/array/byte_view_array.rs.html#301-303\">source</a><a href=\"#method.len\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"arrow_array/array/trait.Array.html#tymethod.len\" class=\"fn\">len</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a></h4></section></summary><div class='docblock'>Returns the length (i.e., number of elements) of this array. <a href=\"arrow_array/array/trait.Array.html#tymethod.len\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_empty\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/array/byte_view_array.rs.html#305-307\">source</a><a href=\"#method.is_empty\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"arrow_array/array/trait.Array.html#tymethod.is_empty\" class=\"fn\">is_empty</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Returns whether this array is empty. <a href=\"arrow_array/array/trait.Array.html#tymethod.is_empty\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.offset\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/array/byte_view_array.rs.html#309-311\">source</a><a href=\"#method.offset\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"arrow_array/array/trait.Array.html#tymethod.offset\" class=\"fn\">offset</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a></h4></section></summary><div class='docblock'>Returns the offset into the underlying data used by this array(-slice).\nNote that the underlying data can be shared by many arrays.\nThis defaults to <code>0</code>. <a href=\"arrow_array/array/trait.Array.html#tymethod.offset\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.nulls\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/array/byte_view_array.rs.html#313-315\">source</a><a href=\"#method.nulls\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"arrow_array/array/trait.Array.html#tymethod.nulls\" class=\"fn\">nulls</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;NullBuffer&gt;</h4></section></summary><div class='docblock'>Returns the null buffer of this array if any. <a href=\"arrow_array/array/trait.Array.html#tymethod.nulls\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.get_buffer_memory_size\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/array/byte_view_array.rs.html#317-324\">source</a><a href=\"#method.get_buffer_memory_size\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"arrow_array/array/trait.Array.html#tymethod.get_buffer_memory_size\" class=\"fn\">get_buffer_memory_size</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a></h4></section></summary><div class='docblock'>Returns the total number of bytes of memory pointed to by this array.\nThe buffers store bytes in the Arrow memory format, and include the data as well as the validity map.\nNote that this does not always correspond to the exact memory usage of an array,\nsince multiple arrays can share the same buffers or slices thereof.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.get_array_memory_size\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/array/byte_view_array.rs.html#326-328\">source</a><a href=\"#method.get_array_memory_size\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"arrow_array/array/trait.Array.html#tymethod.get_array_memory_size\" class=\"fn\">get_array_memory_size</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a></h4></section></summary><div class='docblock'>Returns the total number of bytes of memory occupied physically by this array.\nThis value will always be greater than returned by <code>get_buffer_memory_size()</code> and\nincludes the overhead of the data structures that contain the pointers to the various buffers.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.logical_nulls\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/array/mod.rs.html#212-214\">source</a><a href=\"#method.logical_nulls\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"arrow_array/array/trait.Array.html#method.logical_nulls\" class=\"fn\">logical_nulls</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;NullBuffer&gt;</h4></section></summary><div class='docblock'>Returns a potentially computed [<code>NullBuffer</code>] that represents the logical\nnull values of this array, if any. <a href=\"arrow_array/array/trait.Array.html#method.logical_nulls\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_null\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/array/mod.rs.html#237-239\">source</a><a href=\"#method.is_null\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"arrow_array/array/trait.Array.html#method.is_null\" class=\"fn\">is_null</a>(&amp;self, index: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Returns whether the element at <code>index</code> is null according to <a href=\"arrow_array/array/trait.Array.html#tymethod.nulls\" title=\"method arrow_array::array::Array::nulls\"><code>Array::nulls</code></a> <a href=\"arrow_array/array/trait.Array.html#method.is_null\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_valid\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/array/mod.rs.html#254-256\">source</a><a href=\"#method.is_valid\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"arrow_array/array/trait.Array.html#method.is_valid\" class=\"fn\">is_valid</a>(&amp;self, index: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Returns whether the element at <code>index</code> is <em>not</em> null, the\nopposite of <a href=\"arrow_array/array/trait.Array.html#method.is_null\"><code>Self::is_null</code></a>. <a href=\"arrow_array/array/trait.Array.html#method.is_valid\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.null_count\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/array/mod.rs.html#273-275\">source</a><a href=\"#method.null_count\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"arrow_array/array/trait.Array.html#method.null_count\" class=\"fn\">null_count</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a></h4></section></summary><div class='docblock'>Returns the total number of physical null values in this array. <a href=\"arrow_array/array/trait.Array.html#method.null_count\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_nullable\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/array/mod.rs.html#286-288\">source</a><a href=\"#method.is_nullable\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"arrow_array/array/trait.Array.html#method.is_nullable\" class=\"fn\">is_nullable</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Returns <code>false</code> if the array is guaranteed to not contain any logical nulls <a href=\"arrow_array/array/trait.Array.html#method.is_nullable\">Read more</a></div></details></div></details>","Array","arrow_array::array::byte_view_array::BinaryViewArray","arrow_array::array::byte_view_array::StringViewArray"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-GenericByteViewArray%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/arrow_array/array/byte_view_array.rs.html#104-114\">source</a><a href=\"#impl-Clone-for-GenericByteViewArray%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"arrow_array/types/trait.ByteViewType.html\" title=\"trait arrow_array::types::ByteViewType\">ByteViewType</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"arrow_array/array/byte_view_array/struct.GenericByteViewArray.html\" title=\"struct arrow_array::array::byte_view_array::GenericByteViewArray\">GenericByteViewArray</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/array/byte_view_array.rs.html#105-113\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; Self</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","arrow_array::array::byte_view_array::BinaryViewArray","arrow_array::array::byte_view_array::StringViewArray"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-GenericByteViewArray%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/arrow_array/array/byte_view_array.rs.html#270-278\">source</a><a href=\"#impl-Debug-for-GenericByteViewArray%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"arrow_array/types/trait.ByteViewType.html\" title=\"trait arrow_array::types::ByteViewType\">ByteViewType</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"arrow_array/array/byte_view_array/struct.GenericByteViewArray.html\" title=\"struct arrow_array::array::byte_view_array::GenericByteViewArray\">GenericByteViewArray</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/array/byte_view_array.rs.html#271-277\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/nightly/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","arrow_array::array::byte_view_array::BinaryViewArray","arrow_array::array::byte_view_array::StringViewArray"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3CArrayData%3E-for-GenericByteViewArray%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/arrow_array/array/byte_view_array.rs.html#352-365\">source</a><a href=\"#impl-From%3CArrayData%3E-for-GenericByteViewArray%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"arrow_array/types/trait.ByteViewType.html\" title=\"trait arrow_array::types::ByteViewType\">ByteViewType</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"arrow_data/data/struct.ArrayData.html\" title=\"struct arrow_data::data::ArrayData\">ArrayData</a>&gt; for <a class=\"struct\" href=\"arrow_array/array/byte_view_array/struct.GenericByteViewArray.html\" title=\"struct arrow_array::array::byte_view_array::GenericByteViewArray\">GenericByteViewArray</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/array/byte_view_array.rs.html#353-364\">source</a><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(value: <a class=\"struct\" href=\"arrow_data/data/struct.ArrayData.html\" title=\"struct arrow_data::data::ArrayData\">ArrayData</a>) -&gt; Self</h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<ArrayData>","arrow_array::array::byte_view_array::BinaryViewArray","arrow_array::array::byte_view_array::StringViewArray"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-FromIterator%3C%26Option%3CPtr%3E%3E-for-GenericByteViewArray%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/arrow_array/array/byte_view_array.rs.html#380-390\">source</a><a href=\"#impl-FromIterator%3C%26Option%3CPtr%3E%3E-for-GenericByteViewArray%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, Ptr, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;&amp;'a <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;Ptr&gt;&gt; for <a class=\"struct\" href=\"arrow_array/array/byte_view_array/struct.GenericByteViewArray.html\" title=\"struct arrow_array::array::byte_view_array::GenericByteViewArray\">GenericByteViewArray</a>&lt;T&gt;<div class=\"where\">where\n    Ptr: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;T::<a class=\"associatedtype\" href=\"arrow_array/types/trait.ByteViewType.html#associatedtype.Native\" title=\"type arrow_array::types::ByteViewType::Native\">Native</a>&gt; + 'a,\n    T: <a class=\"trait\" href=\"arrow_array/types/trait.ByteViewType.html\" title=\"trait arrow_array::types::ByteViewType\">ByteViewType</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from_iter\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/array/byte_view_array.rs.html#385-389\">source</a><a href=\"#method.from_iter\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html#tymethod.from_iter\" class=\"fn\">from_iter</a>&lt;I: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a>&lt;Item = &amp;'a <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;Ptr&gt;&gt;&gt;(iter: I) -&gt; Self</h4></section></summary><div class='docblock'>Creates a value from an iterator. <a href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html#tymethod.from_iter\">Read more</a></div></details></div></details>","FromIterator<&'a Option<Ptr>>","arrow_array::array::byte_view_array::BinaryViewArray","arrow_array::array::byte_view_array::StringViewArray"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-FromIterator%3COption%3CPtr%3E%3E-for-GenericByteViewArray%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/arrow_array/array/byte_view_array.rs.html#392-402\">source</a><a href=\"#impl-FromIterator%3COption%3CPtr%3E%3E-for-GenericByteViewArray%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Ptr, T: <a class=\"trait\" href=\"arrow_array/types/trait.ByteViewType.html\" title=\"trait arrow_array::types::ByteViewType\">ByteViewType</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;Ptr&gt;&gt; for <a class=\"struct\" href=\"arrow_array/array/byte_view_array/struct.GenericByteViewArray.html\" title=\"struct arrow_array::array::byte_view_array::GenericByteViewArray\">GenericByteViewArray</a>&lt;T&gt;<div class=\"where\">where\n    Ptr: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;T::<a class=\"associatedtype\" href=\"arrow_array/types/trait.ByteViewType.html#associatedtype.Native\" title=\"type arrow_array::types::ByteViewType::Native\">Native</a>&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from_iter\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/array/byte_view_array.rs.html#396-401\">source</a><a href=\"#method.from_iter\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html#tymethod.from_iter\" class=\"fn\">from_iter</a>&lt;I: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a>&lt;Item = <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;Ptr&gt;&gt;&gt;(iter: I) -&gt; Self</h4></section></summary><div class='docblock'>Creates a value from an iterator. <a href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html#tymethod.from_iter\">Read more</a></div></details></div></details>","FromIterator<Option<Ptr>>","arrow_array::array::byte_view_array::BinaryViewArray","arrow_array::array::byte_view_array::StringViewArray"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-GenericByteViewArray%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/arrow_array/array/byte_view_array.rs.html#116-268\">source</a><a href=\"#impl-GenericByteViewArray%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"arrow_array/types/trait.ByteViewType.html\" title=\"trait arrow_array::types::ByteViewType\">ByteViewType</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"struct\" href=\"arrow_array/array/byte_view_array/struct.GenericByteViewArray.html\" title=\"struct arrow_array::array::byte_view_array::GenericByteViewArray\">GenericByteViewArray</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/arrow_array/array/byte_view_array.rs.html#122-124\">source</a><h4 class=\"code-header\">pub fn <a href=\"arrow_array/array/byte_view_array/struct.GenericByteViewArray.html#tymethod.new\" class=\"fn\">new</a>(\n    views: ScalarBuffer&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u128.html\">u128</a>&gt;,\n    buffers: <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;Buffer&gt;,\n    nulls: <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;NullBuffer&gt;\n) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Create a new <a href=\"arrow_array/array/byte_view_array/struct.GenericByteViewArray.html\" title=\"struct arrow_array::array::byte_view_array::GenericByteViewArray\"><code>GenericByteViewArray</code></a> from the provided parts, panicking on failure</p>\n<h5 id=\"panics\"><a class=\"doc-anchor\" href=\"#panics\">§</a>Panics</h5>\n<p>Panics if <a href=\"arrow_array/array/byte_view_array/struct.GenericByteViewArray.html#method.try_new\" title=\"associated function arrow_array::array::byte_view_array::GenericByteViewArray::try_new\"><code>GenericByteViewArray::try_new</code></a> returns an error</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_new\" class=\"method\"><a class=\"src rightside\" href=\"src/arrow_array/array/byte_view_array.rs.html#132-157\">source</a><h4 class=\"code-header\">pub fn <a href=\"arrow_array/array/byte_view_array/struct.GenericByteViewArray.html#tymethod.try_new\" class=\"fn\">try_new</a>(\n    views: ScalarBuffer&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u128.html\">u128</a>&gt;,\n    buffers: <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;Buffer&gt;,\n    nulls: <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;NullBuffer&gt;\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Self, ArrowError&gt;</h4></section></summary><div class=\"docblock\"><p>Create a new <a href=\"arrow_array/array/byte_view_array/struct.GenericByteViewArray.html\" title=\"struct arrow_array::array::byte_view_array::GenericByteViewArray\"><code>GenericByteViewArray</code></a> from the provided parts, returning an error on failure</p>\n<h5 id=\"errors\"><a class=\"doc-anchor\" href=\"#errors\">§</a>Errors</h5>\n<ul>\n<li><code>views.len() != nulls.len()</code></li>\n<li><a href=\"arrow_array/types/trait.ByteViewType.html#tymethod.validate\" title=\"associated function arrow_array::types::ByteViewType::validate\">ByteViewType::validate</a> fails</li>\n</ul>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.new_unchecked\" class=\"method\"><a class=\"src rightside\" href=\"src/arrow_array/array/byte_view_array.rs.html#164-176\">source</a><h4 class=\"code-header\">pub unsafe fn <a href=\"arrow_array/array/byte_view_array/struct.GenericByteViewArray.html#tymethod.new_unchecked\" class=\"fn\">new_unchecked</a>(\n    views: ScalarBuffer&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u128.html\">u128</a>&gt;,\n    buffers: <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;Buffer&gt;,\n    nulls: <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;NullBuffer&gt;\n) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Create a new <a href=\"arrow_array/array/byte_view_array/struct.GenericByteViewArray.html\" title=\"struct arrow_array::array::byte_view_array::GenericByteViewArray\"><code>GenericByteViewArray</code></a> from the provided parts, without validation</p>\n<h5 id=\"safety\"><a class=\"doc-anchor\" href=\"#safety\">§</a>Safety</h5>\n<p>Safe if <a href=\"arrow_array/array/byte_view_array/struct.GenericByteViewArray.html#method.try_new\" title=\"associated function arrow_array::array::byte_view_array::GenericByteViewArray::try_new\"><code>Self::try_new</code></a> would not error</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.new_null\" class=\"method\"><a class=\"src rightside\" href=\"src/arrow_array/array/byte_view_array.rs.html#179-187\">source</a><h4 class=\"code-header\">pub fn <a href=\"arrow_array/array/byte_view_array/struct.GenericByteViewArray.html#tymethod.new_null\" class=\"fn\">new_null</a>(len: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Create a new <a href=\"arrow_array/array/byte_view_array/struct.GenericByteViewArray.html\" title=\"struct arrow_array::array::byte_view_array::GenericByteViewArray\"><code>GenericByteViewArray</code></a> of length <code>len</code> where all values are null</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.from_iter_values\" class=\"method\"><a class=\"src rightside\" href=\"src/arrow_array/array/byte_view_array.rs.html#190-201\">source</a><h4 class=\"code-header\">pub fn <a href=\"arrow_array/array/byte_view_array/struct.GenericByteViewArray.html#tymethod.from_iter_values\" class=\"fn\">from_iter_values</a>&lt;Ptr, I&gt;(iter: I) -&gt; Self<div class=\"where\">where\n    Ptr: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;T::<a class=\"associatedtype\" href=\"arrow_array/types/trait.ByteViewType.html#associatedtype.Native\" title=\"type arrow_array::types::ByteViewType::Native\">Native</a>&gt;,\n    I: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a>&lt;Item = Ptr&gt;,</div></h4></section></summary><div class=\"docblock\"><p>Creates a <a href=\"arrow_array/array/byte_view_array/struct.GenericByteViewArray.html\" title=\"struct arrow_array::array::byte_view_array::GenericByteViewArray\"><code>GenericByteViewArray</code></a> based on an iterator of values without nulls</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.into_parts\" class=\"method\"><a class=\"src rightside\" href=\"src/arrow_array/array/byte_view_array.rs.html#204-206\">source</a><h4 class=\"code-header\">pub fn <a href=\"arrow_array/array/byte_view_array/struct.GenericByteViewArray.html#tymethod.into_parts\" class=\"fn\">into_parts</a>(self) -&gt; (ScalarBuffer&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u128.html\">u128</a>&gt;, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;Buffer&gt;, <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;NullBuffer&gt;)</h4></section></summary><div class=\"docblock\"><p>Deconstruct this array into its constituent parts</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.views\" class=\"method\"><a class=\"src rightside\" href=\"src/arrow_array/array/byte_view_array.rs.html#210-212\">source</a><h4 class=\"code-header\">pub fn <a href=\"arrow_array/array/byte_view_array/struct.GenericByteViewArray.html#tymethod.views\" class=\"fn\">views</a>(&amp;self) -&gt; &amp;ScalarBuffer&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u128.html\">u128</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Returns the views buffer</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.data_buffers\" class=\"method\"><a class=\"src rightside\" href=\"src/arrow_array/array/byte_view_array.rs.html#216-218\">source</a><h4 class=\"code-header\">pub fn <a href=\"arrow_array/array/byte_view_array/struct.GenericByteViewArray.html#tymethod.data_buffers\" class=\"fn\">data_buffers</a>(&amp;self) -&gt; &amp;[Buffer]</h4></section></summary><div class=\"docblock\"><p>Returns the buffers storing string data</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.value\" class=\"method\"><a class=\"src rightside\" href=\"src/arrow_array/array/byte_view_array.rs.html#223-233\">source</a><h4 class=\"code-header\">pub fn <a href=\"arrow_array/array/byte_view_array/struct.GenericByteViewArray.html#tymethod.value\" class=\"fn\">value</a>(&amp;self, i: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>) -&gt; &amp;T::<a class=\"associatedtype\" href=\"arrow_array/types/trait.ByteViewType.html#associatedtype.Native\" title=\"type arrow_array::types::ByteViewType::Native\">Native</a></h4></section></summary><div class=\"docblock\"><p>Returns the element at index <code>i</code></p>\n<h5 id=\"panics-1\"><a class=\"doc-anchor\" href=\"#panics-1\">§</a>Panics</h5>\n<p>Panics if index <code>i</code> is out of bounds.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.value_unchecked\" class=\"method\"><a class=\"src rightside\" href=\"src/arrow_array/array/byte_view_array.rs.html#238-251\">source</a><h4 class=\"code-header\">pub unsafe fn <a href=\"arrow_array/array/byte_view_array/struct.GenericByteViewArray.html#tymethod.value_unchecked\" class=\"fn\">value_unchecked</a>(&amp;self, idx: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>) -&gt; &amp;T::<a class=\"associatedtype\" href=\"arrow_array/types/trait.ByteViewType.html#associatedtype.Native\" title=\"type arrow_array::types::ByteViewType::Native\">Native</a></h4></section></summary><div class=\"docblock\"><p>Returns the element at index <code>i</code></p>\n<h5 id=\"safety-1\"><a class=\"doc-anchor\" href=\"#safety-1\">§</a>Safety</h5>\n<p>Caller is responsible for ensuring that the index is within the bounds of the array</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.iter\" class=\"method\"><a class=\"src rightside\" href=\"src/arrow_array/array/byte_view_array.rs.html#254-256\">source</a><h4 class=\"code-header\">pub fn <a href=\"arrow_array/array/byte_view_array/struct.GenericByteViewArray.html#tymethod.iter\" class=\"fn\">iter</a>(&amp;self) -&gt; <a class=\"struct\" href=\"arrow_array/iterator/struct.ArrayIter.html\" title=\"struct arrow_array::iterator::ArrayIter\">ArrayIter</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Self</a>&gt; <a href=\"#\" class=\"tooltip\" data-notable-ty=\"ArrayIter&lt;&amp;Self&gt;\">ⓘ</a></h4></section></summary><div class=\"docblock\"><p>constructs a new iterator</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.slice\" class=\"method\"><a class=\"src rightside\" href=\"src/arrow_array/array/byte_view_array.rs.html#259-267\">source</a><h4 class=\"code-header\">pub fn <a href=\"arrow_array/array/byte_view_array/struct.GenericByteViewArray.html#tymethod.slice\" class=\"fn\">slice</a>(&amp;self, offset: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>, length: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Returns a zero-copy slice of this array with the indicated offset and length.</p>\n</div></details></div></details>",0,"arrow_array::array::byte_view_array::BinaryViewArray","arrow_array::array::byte_view_array::StringViewArray"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()