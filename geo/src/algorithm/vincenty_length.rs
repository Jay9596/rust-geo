use num_traits::{Float, FromPrimitive};

use algorithm::vincenty_distance::{FailedToConvergeError, VincentyDistance};
use {Line, LineString, MultiLineString};

pub trait VincentyLength<T, RHS = Self> {
    fn vincenty_length(&self) -> Result<T, FailedToConvergeError>;
}

impl<T> VincentyLength<T> for Line<T>
where
    T: Float + FromPrimitive,
{
    /// The units of the returned value is meters.
    fn vincenty_length(&self) -> Result<T, FailedToConvergeError> {
        let (start, end) = self.points();
        start.vincenty_distance(&end)
    }
}

impl<T> VincentyLength<T> for LineString<T>
where
    T: Float + FromPrimitive,
{
    fn vincenty_length(&self) -> Result<T, FailedToConvergeError> {
        let mut length = T::zero();
        for line in self.lines() {
            length = length + line.vincenty_length()?;
        }
        Ok(length)
    }
}

impl<T> VincentyLength<T> for MultiLineString<T>
where
    T: Float + FromPrimitive,
{
    fn vincenty_length(&self) -> Result<T, FailedToConvergeError> {
        let mut length = T::zero();
        for line_string in &self.0 {
            length = length + line_string.vincenty_length()?;
        }
        Ok(length)
    }
}
