using System;
using System.Collections.Generic;

namespace WebApplication1.Models;

public partial class Product
{
    public Guid ProductId { get; set; }

    public string Name { get; set; } = null!;

    public string? Description { get; set; }

    public decimal Price { get; set; }

    public int Stock { get; set; }

    public DateTime? CreatedAt { get; set; }

    public bool? IsActive { get; set; }
}
