using MediatR;

namespace Application.GetNote;

public record GetNoteQuery(Guid NoteId) : IRequest<GetNoteResponse>;
