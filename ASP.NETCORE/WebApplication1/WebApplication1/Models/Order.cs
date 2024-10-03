using System;
using System.Collections.Generic;

namespace WebApplication1.Models;

public partial class Order
{
    public Guid OrderId { get; set; }

    public Guid? CustomerId { get; set; }

    public DateTime? OrderDate { get; set; }

    public decimal? TotalAmount { get; set; }

    public virtual Customer? Customer { get; set; }
}
