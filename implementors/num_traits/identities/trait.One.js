(function() {var implementors = {};
implementors["alga"] = ["impl <a class=\"trait\" href=\"num_traits/identities/trait.One.html\" title=\"trait num_traits::identities::One\">One</a> for <a class=\"struct\" href=\"alga/general/struct.Id.html\" title=\"struct alga::general::Id\">Id</a>","impl&lt;T&gt; <a class=\"trait\" href=\"num_traits/identities/trait.One.html\" title=\"trait num_traits::identities::One\">One</a> for <a class=\"struct\" href=\"num_complex/struct.Complex.html\" title=\"struct num_complex::Complex\">Complex</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"num_traits/trait.Num.html\" title=\"trait num_traits::Num\">Num</a>,&nbsp;</span>",];
implementors["nalgebra"] = ["impl <a class=\"trait\" href=\"num_traits/identities/trait.One.html\" title=\"trait num_traits::identities::One\">One</a> for <a class=\"struct\" href=\"nalgebra/struct.Id.html\" title=\"struct nalgebra::Id\">Id</a>&lt;<a class=\"struct\" href=\"alga/general/operator/struct.Multiplicative.html\" title=\"struct alga::general::operator::Multiplicative\">Multiplicative</a>&gt;","impl&lt;T&gt; <a class=\"trait\" href=\"num_traits/identities/trait.One.html\" title=\"trait num_traits::identities::One\">One</a> for <a class=\"struct\" href=\"num_complex/struct.Complex.html\" title=\"struct num_complex::Complex\">Complex</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"num_traits/trait.Num.html\" title=\"trait num_traits::Num\">Num</a>,&nbsp;</span>","impl&lt;N, D:&nbsp;<a class=\"trait\" href=\"nalgebra/core/dimension/trait.DimName.html\" title=\"trait nalgebra::core::dimension::DimName\">DimName</a>, S&gt; <a class=\"trait\" href=\"num_traits/identities/trait.One.html\" title=\"trait num_traits::identities::One\">One</a> for <a class=\"struct\" href=\"nalgebra/core/struct.Matrix.html\" title=\"struct nalgebra::core::Matrix\">Matrix</a>&lt;N, D, D, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;N: <a class=\"trait\" href=\"nalgebra/core/trait.Scalar.html\" title=\"trait nalgebra::core::Scalar\">Scalar</a> + <a class=\"trait\" href=\"num_traits/identities/trait.Zero.html\" title=\"trait num_traits::identities::Zero\">Zero</a> + <a class=\"trait\" href=\"num_traits/identities/trait.One.html\" title=\"trait num_traits::identities::One\">One</a> + <a class=\"trait\" href=\"alga/general/operator/trait.ClosedMul.html\" title=\"trait alga::general::operator::ClosedMul\">ClosedMul</a> + <a class=\"trait\" href=\"alga/general/operator/trait.ClosedAdd.html\" title=\"trait alga::general::operator::ClosedAdd\">ClosedAdd</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"nalgebra/core/storage/trait.OwnedStorage.html\" title=\"trait nalgebra::core::storage::OwnedStorage\">OwnedStorage</a>&lt;N, D, D&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;S::<a class=\"type\" href=\"nalgebra/core/storage/trait.Storage.html#associatedtype.Alloc\" title=\"type nalgebra::core::storage::Storage::Alloc\">Alloc</a>: <a class=\"trait\" href=\"nalgebra/core/allocator/trait.OwnedAllocator.html\" title=\"trait nalgebra::core::allocator::OwnedAllocator\">OwnedAllocator</a>&lt;N, D, D, S&gt;,&nbsp;</span>","impl&lt;N, D:&nbsp;<a class=\"trait\" href=\"nalgebra/core/dimension/trait.DimName.html\" title=\"trait nalgebra::core::dimension::DimName\">DimName</a>, S&gt; <a class=\"trait\" href=\"num_traits/identities/trait.One.html\" title=\"trait num_traits::identities::One\">One</a> for <a class=\"struct\" href=\"nalgebra/geometry/struct.RotationBase.html\" title=\"struct nalgebra::geometry::RotationBase\">RotationBase</a>&lt;N, D, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;N: <a class=\"trait\" href=\"nalgebra/core/trait.Scalar.html\" title=\"trait nalgebra::core::Scalar\">Scalar</a> + <a class=\"trait\" href=\"num_traits/identities/trait.Zero.html\" title=\"trait num_traits::identities::Zero\">Zero</a> + <a class=\"trait\" href=\"num_traits/identities/trait.One.html\" title=\"trait num_traits::identities::One\">One</a> + <a class=\"trait\" href=\"alga/general/operator/trait.ClosedAdd.html\" title=\"trait alga::general::operator::ClosedAdd\">ClosedAdd</a> + <a class=\"trait\" href=\"alga/general/operator/trait.ClosedMul.html\" title=\"trait alga::general::operator::ClosedMul\">ClosedMul</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"nalgebra/core/storage/trait.OwnedStorage.html\" title=\"trait nalgebra::core::storage::OwnedStorage\">OwnedStorage</a>&lt;N, D, D&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;S::<a class=\"type\" href=\"nalgebra/core/storage/trait.Storage.html#associatedtype.Alloc\" title=\"type nalgebra::core::storage::Storage::Alloc\">Alloc</a>: <a class=\"trait\" href=\"nalgebra/core/allocator/trait.OwnedAllocator.html\" title=\"trait nalgebra::core::allocator::OwnedAllocator\">OwnedAllocator</a>&lt;N, D, D, S&gt;,&nbsp;</span>","impl&lt;N, S&gt; <a class=\"trait\" href=\"num_traits/identities/trait.One.html\" title=\"trait num_traits::identities::One\">One</a> for <a class=\"struct\" href=\"nalgebra/geometry/struct.QuaternionBase.html\" title=\"struct nalgebra::geometry::QuaternionBase\">QuaternionBase</a>&lt;N, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;N: <a class=\"trait\" href=\"alga/general/real/trait.Real.html\" title=\"trait alga::general::real::Real\">Real</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"nalgebra/core/storage/trait.OwnedStorage.html\" title=\"trait nalgebra::core::storage::OwnedStorage\">OwnedStorage</a>&lt;N, <a class=\"struct\" href=\"nalgebra/core/dimension/struct.U4.html\" title=\"struct nalgebra::core::dimension::U4\">U4</a>, <a class=\"struct\" href=\"nalgebra/core/dimension/struct.U1.html\" title=\"struct nalgebra::core::dimension::U1\">U1</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;S::<a class=\"type\" href=\"nalgebra/core/storage/trait.Storage.html#associatedtype.Alloc\" title=\"type nalgebra::core::storage::Storage::Alloc\">Alloc</a>: <a class=\"trait\" href=\"nalgebra/core/allocator/trait.OwnedAllocator.html\" title=\"trait nalgebra::core::allocator::OwnedAllocator\">OwnedAllocator</a>&lt;N, <a class=\"struct\" href=\"nalgebra/core/dimension/struct.U4.html\" title=\"struct nalgebra::core::dimension::U4\">U4</a>, <a class=\"struct\" href=\"nalgebra/core/dimension/struct.U1.html\" title=\"struct nalgebra::core::dimension::U1\">U1</a>, S&gt;,&nbsp;</span>","impl&lt;N, S&gt; <a class=\"trait\" href=\"num_traits/identities/trait.One.html\" title=\"trait num_traits::identities::One\">One</a> for <a class=\"type\" href=\"nalgebra/geometry/type.UnitQuaternionBase.html\" title=\"type nalgebra::geometry::UnitQuaternionBase\">UnitQuaternionBase</a>&lt;N, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;N: <a class=\"trait\" href=\"alga/general/real/trait.Real.html\" title=\"trait alga::general::real::Real\">Real</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"nalgebra/core/storage/trait.OwnedStorage.html\" title=\"trait nalgebra::core::storage::OwnedStorage\">OwnedStorage</a>&lt;N, <a class=\"struct\" href=\"nalgebra/core/dimension/struct.U4.html\" title=\"struct nalgebra::core::dimension::U4\">U4</a>, <a class=\"struct\" href=\"nalgebra/core/dimension/struct.U1.html\" title=\"struct nalgebra::core::dimension::U1\">U1</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;S::<a class=\"type\" href=\"nalgebra/core/storage/trait.Storage.html#associatedtype.Alloc\" title=\"type nalgebra::core::storage::Storage::Alloc\">Alloc</a>: <a class=\"trait\" href=\"nalgebra/core/allocator/trait.OwnedAllocator.html\" title=\"trait nalgebra::core::allocator::OwnedAllocator\">OwnedAllocator</a>&lt;N, <a class=\"struct\" href=\"nalgebra/core/dimension/struct.U4.html\" title=\"struct nalgebra::core::dimension::U4\">U4</a>, <a class=\"struct\" href=\"nalgebra/core/dimension/struct.U1.html\" title=\"struct nalgebra::core::dimension::U1\">U1</a>, S&gt;,&nbsp;</span>","impl&lt;N:&nbsp;<a class=\"trait\" href=\"alga/general/real/trait.Real.html\" title=\"trait alga::general::real::Real\">Real</a>&gt; <a class=\"trait\" href=\"num_traits/identities/trait.One.html\" title=\"trait num_traits::identities::One\">One</a> for <a class=\"type\" href=\"nalgebra/geometry/type.UnitComplex.html\" title=\"type nalgebra::geometry::UnitComplex\">UnitComplex</a>&lt;N&gt;","impl&lt;N, D:&nbsp;<a class=\"trait\" href=\"nalgebra/core/dimension/trait.DimName.html\" title=\"trait nalgebra::core::dimension::DimName\">DimName</a>, S&gt; <a class=\"trait\" href=\"num_traits/identities/trait.One.html\" title=\"trait num_traits::identities::One\">One</a> for <a class=\"struct\" href=\"nalgebra/geometry/struct.TranslationBase.html\" title=\"struct nalgebra::geometry::TranslationBase\">TranslationBase</a>&lt;N, D, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;N: <a class=\"trait\" href=\"nalgebra/core/trait.Scalar.html\" title=\"trait nalgebra::core::Scalar\">Scalar</a> + <a class=\"trait\" href=\"num_traits/identities/trait.Zero.html\" title=\"trait num_traits::identities::Zero\">Zero</a> + <a class=\"trait\" href=\"alga/general/operator/trait.ClosedAdd.html\" title=\"trait alga::general::operator::ClosedAdd\">ClosedAdd</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"nalgebra/core/storage/trait.OwnedStorage.html\" title=\"trait nalgebra::core::storage::OwnedStorage\">OwnedStorage</a>&lt;N, D, <a class=\"struct\" href=\"nalgebra/core/dimension/struct.U1.html\" title=\"struct nalgebra::core::dimension::U1\">U1</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;S::<a class=\"type\" href=\"nalgebra/core/storage/trait.Storage.html#associatedtype.Alloc\" title=\"type nalgebra::core::storage::Storage::Alloc\">Alloc</a>: <a class=\"trait\" href=\"nalgebra/core/allocator/trait.OwnedAllocator.html\" title=\"trait nalgebra::core::allocator::OwnedAllocator\">OwnedAllocator</a>&lt;N, D, <a class=\"struct\" href=\"nalgebra/core/dimension/struct.U1.html\" title=\"struct nalgebra::core::dimension::U1\">U1</a>, S&gt;,&nbsp;</span>","impl&lt;N, D:&nbsp;<a class=\"trait\" href=\"nalgebra/core/dimension/trait.DimName.html\" title=\"trait nalgebra::core::dimension::DimName\">DimName</a>, S, R&gt; <a class=\"trait\" href=\"num_traits/identities/trait.One.html\" title=\"trait num_traits::identities::One\">One</a> for <a class=\"struct\" href=\"nalgebra/geometry/struct.IsometryBase.html\" title=\"struct nalgebra::geometry::IsometryBase\">IsometryBase</a>&lt;N, D, S, R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;N: <a class=\"trait\" href=\"alga/general/real/trait.Real.html\" title=\"trait alga::general::real::Real\">Real</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"nalgebra/core/storage/trait.OwnedStorage.html\" title=\"trait nalgebra::core::storage::OwnedStorage\">OwnedStorage</a>&lt;N, D, <a class=\"struct\" href=\"nalgebra/core/dimension/struct.U1.html\" title=\"struct nalgebra::core::dimension::U1\">U1</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;R: <a class=\"trait\" href=\"alga/linear/transformation/trait.Rotation.html\" title=\"trait alga::linear::transformation::Rotation\">AlgaRotation</a>&lt;<a class=\"struct\" href=\"nalgebra/geometry/struct.PointBase.html\" title=\"struct nalgebra::geometry::PointBase\">PointBase</a>&lt;N, D, S&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;S::<a class=\"type\" href=\"nalgebra/core/storage/trait.Storage.html#associatedtype.Alloc\" title=\"type nalgebra::core::storage::Storage::Alloc\">Alloc</a>: <a class=\"trait\" href=\"nalgebra/core/allocator/trait.OwnedAllocator.html\" title=\"trait nalgebra::core::allocator::OwnedAllocator\">OwnedAllocator</a>&lt;N, D, <a class=\"struct\" href=\"nalgebra/core/dimension/struct.U1.html\" title=\"struct nalgebra::core::dimension::U1\">U1</a>, S&gt;,&nbsp;</span>","impl&lt;N, D:&nbsp;<a class=\"trait\" href=\"nalgebra/core/dimension/trait.DimName.html\" title=\"trait nalgebra::core::dimension::DimName\">DimName</a>, S, R&gt; <a class=\"trait\" href=\"num_traits/identities/trait.One.html\" title=\"trait num_traits::identities::One\">One</a> for <a class=\"struct\" href=\"nalgebra/geometry/struct.SimilarityBase.html\" title=\"struct nalgebra::geometry::SimilarityBase\">SimilarityBase</a>&lt;N, D, S, R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;N: <a class=\"trait\" href=\"alga/general/real/trait.Real.html\" title=\"trait alga::general::real::Real\">Real</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"nalgebra/core/storage/trait.OwnedStorage.html\" title=\"trait nalgebra::core::storage::OwnedStorage\">OwnedStorage</a>&lt;N, D, <a class=\"struct\" href=\"nalgebra/core/dimension/struct.U1.html\" title=\"struct nalgebra::core::dimension::U1\">U1</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;R: <a class=\"trait\" href=\"alga/linear/transformation/trait.Rotation.html\" title=\"trait alga::linear::transformation::Rotation\">AlgaRotation</a>&lt;<a class=\"struct\" href=\"nalgebra/geometry/struct.PointBase.html\" title=\"struct nalgebra::geometry::PointBase\">PointBase</a>&lt;N, D, S&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;S::<a class=\"type\" href=\"nalgebra/core/storage/trait.Storage.html#associatedtype.Alloc\" title=\"type nalgebra::core::storage::Storage::Alloc\">Alloc</a>: <a class=\"trait\" href=\"nalgebra/core/allocator/trait.OwnedAllocator.html\" title=\"trait nalgebra::core::allocator::OwnedAllocator\">OwnedAllocator</a>&lt;N, D, <a class=\"struct\" href=\"nalgebra/core/dimension/struct.U1.html\" title=\"struct nalgebra::core::dimension::U1\">U1</a>, S&gt;,&nbsp;</span>","impl&lt;N, D, S, C:&nbsp;<a class=\"trait\" href=\"nalgebra/geometry/trait.TCategory.html\" title=\"trait nalgebra::geometry::TCategory\">TCategory</a>&gt; <a class=\"trait\" href=\"num_traits/identities/trait.One.html\" title=\"trait num_traits::identities::One\">One</a> for <a class=\"struct\" href=\"nalgebra/geometry/struct.TransformBase.html\" title=\"struct nalgebra::geometry::TransformBase\">TransformBase</a>&lt;N, D, S, C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;N: <a class=\"trait\" href=\"nalgebra/core/trait.Scalar.html\" title=\"trait nalgebra::core::Scalar\">Scalar</a> + <a class=\"trait\" href=\"alga/general/specialized/trait.Field.html\" title=\"trait alga::general::specialized::Field\">Field</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;D: <a class=\"trait\" href=\"nalgebra/core/dimension/trait.DimNameAdd.html\" title=\"trait nalgebra::core::dimension::DimNameAdd\">DimNameAdd</a>&lt;<a class=\"struct\" href=\"nalgebra/core/dimension/struct.U1.html\" title=\"struct nalgebra::core::dimension::U1\">U1</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"nalgebra/core/storage/trait.OwnedStorage.html\" title=\"trait nalgebra::core::storage::OwnedStorage\">OwnedStorage</a>&lt;N, <a class=\"type\" href=\"nalgebra/core/dimension/type.DimNameSum.html\" title=\"type nalgebra::core::dimension::DimNameSum\">DimNameSum</a>&lt;D, <a class=\"struct\" href=\"nalgebra/core/dimension/struct.U1.html\" title=\"struct nalgebra::core::dimension::U1\">U1</a>&gt;, <a class=\"type\" href=\"nalgebra/core/dimension/type.DimNameSum.html\" title=\"type nalgebra::core::dimension::DimNameSum\">DimNameSum</a>&lt;D, <a class=\"struct\" href=\"nalgebra/core/dimension/struct.U1.html\" title=\"struct nalgebra::core::dimension::U1\">U1</a>&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;S::<a class=\"type\" href=\"nalgebra/core/storage/trait.Storage.html#associatedtype.Alloc\" title=\"type nalgebra::core::storage::Storage::Alloc\">Alloc</a>: <a class=\"trait\" href=\"nalgebra/core/allocator/trait.OwnedAllocator.html\" title=\"trait nalgebra::core::allocator::OwnedAllocator\">OwnedAllocator</a>&lt;N, <a class=\"type\" href=\"nalgebra/core/dimension/type.DimNameSum.html\" title=\"type nalgebra::core::dimension::DimNameSum\">DimNameSum</a>&lt;D, <a class=\"struct\" href=\"nalgebra/core/dimension/struct.U1.html\" title=\"struct nalgebra::core::dimension::U1\">U1</a>&gt;, <a class=\"type\" href=\"nalgebra/core/dimension/type.DimNameSum.html\" title=\"type nalgebra::core::dimension::DimNameSum\">DimNameSum</a>&lt;D, <a class=\"struct\" href=\"nalgebra/core/dimension/struct.U1.html\" title=\"struct nalgebra::core::dimension::U1\">U1</a>&gt;, S&gt;,&nbsp;</span>",];
implementors["num_bigint"] = ["impl <a class=\"trait\" href=\"num_traits/identities/trait.One.html\" title=\"trait num_traits::identities::One\">One</a> for <a class=\"struct\" href=\"num_bigint/struct.BigUint.html\" title=\"struct num_bigint::BigUint\">BigUint</a>","impl <a class=\"trait\" href=\"num_traits/identities/trait.One.html\" title=\"trait num_traits::identities::One\">One</a> for <a class=\"struct\" href=\"num_bigint/struct.BigInt.html\" title=\"struct num_bigint::BigInt\">BigInt</a>",];
implementors["num_complex"] = ["impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"num_traits/trait.Num.html\" title=\"trait num_traits::Num\">Num</a>&gt; <a class=\"trait\" href=\"num_traits/identities/trait.One.html\" title=\"trait num_traits::identities::One\">One</a> for <a class=\"struct\" href=\"num_complex/struct.Complex.html\" title=\"struct num_complex::Complex\">Complex</a>&lt;T&gt;",];
implementors["num_rational"] = ["impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"num_integer/trait.Integer.html\" title=\"trait num_integer::Integer\">Integer</a>&gt; <a class=\"trait\" href=\"num_traits/identities/trait.One.html\" title=\"trait num_traits::identities::One\">One</a> for <a class=\"struct\" href=\"num_rational/struct.Ratio.html\" title=\"struct num_rational::Ratio\">Ratio</a>&lt;T&gt;",];
implementors["num_traits"] = [];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()