namespace Application.GetNote;

public record GetNoteResponse(Guid Id,
    string Title,
    string Content,
    DateTime CreatedAt,
    DateTime? UpdatedAt
);
